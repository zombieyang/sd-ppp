import { app, imaging, core } from "photoshop";
import { SpeicialIDManager, findInAllSubLayer, getDesiredBounds, getLayerOrGroupAfterMerged, unTrimImageData } from '../util.js';
import Jimp from "../library/jimp.min";

// ps returns trimmed data so need padding
function padAndTrimLayerDataToDesireBounds(document, layer, dataFromImagingAPI, desireBounds) {
    if (
        // sometimes the layer does not has alpha
        // sometimes the layer is single colored (grayscale)
        dataFromImagingAPI.length % (desireBounds.width * desireBounds.height) == 0
    ) {
        return dataFromImagingAPI;
    }
    let pixelData = new Uint8Array(desireBounds.width * desireBounds.height * 4);
    let bounds = {
        left: 0,
        top: 0,
        right: document.width,
        bottom: document.height,
    }
    if (layer) bounds = layer.bounds;
    unTrimImageData(
        dataFromImagingAPI,
        pixelData,
        bounds,
        desireBounds
    )
    return pixelData;
}

async function getSelectionData(document, bounds) {
    let options = {
        documentID: document.id,
        sourceBounds: bounds,
    }
    let selection = await imaging.getSelection(options)
    let psImageData = selection.imageData
    const selectionDataFromAPI = await psImageData.getData()
    Promise.resolve().then(() => { psImageData.dispose() })
    return selectionDataFromAPI
}
async function getPixelsData(document, layer, bounds) {
    let options = {
        documentID: document.id,
        applyAlpha: false,
        sourceBounds: bounds,
    }
    if (layer) options.layerID = layer.id
    let pixels = await imaging.getPixels(options)
    let psImageData = pixels.imageData
    const pixelDataFromAPI = await psImageData.getData()
    Promise.resolve().then(() => { psImageData.dispose() })
    return pixelDataFromAPI
}
async function getMaskData(document, layer, bounds) {
    if (!layer) return null;
    let options = {
        documentID: document.id,
        sourceBounds: bounds,
        layerID: layer.id
    }
    let mask = null;
    try {
        mask = await imaging.getLayerMask(options)
    } catch (e) { console.warn(e); return null; }
    let psMaskData = mask.imageData
    if (!psMaskData) return null;
    const maskDataFromAPI = await psMaskData.getData()
    Promise.resolve().then(() => { psMaskData.dispose() })
    return maskDataFromAPI
}



export default async function getImage(serverURL, params) {
    const documentIdentify = params.document_identify
    let document = documentIdentify == SpeicialIDManager.SPECIAL_DOCUMENT_CURRENT ?
        app.activeDocument :
        app.documents.find(document => document.id == SpeicialIDManager.getDocumentID(documentIdentify))
    if (!document) throw new Error('document not found');

    const layerIdentify = params.layer_identify
    const boundLayerIdentify = params.bound_layer_identify
    const desireBounds = getDesiredBounds(document, boundLayerIdentify, layerIdentify);
    const layerID = SpeicialIDManager.getLayerID(layerIdentify);

    const returnData = {
        pixelData: null,
        // maskData: null,
        layerOpacity: 100
    }

    const startTime = Date.now();
    await core.executeAsModal(async (executionContext) => {
        let hostControl;
        let suspensionID;
        let layer;
        let isGroup = false;
        const activeLayers = document.activeLayers;
        function finalize() {
            if (layer && isGroup) {
                layer.selected = false;
                layer.delete();
            }
            if (activeLayers && activeLayers.length > 0) {
                activeLayers.forEach(layer => {
                    const visible = layer.visible;
                    layer.selected = true;
                    layer.visible = visible;
                })
            }
            if (hostControl && suspensionID) hostControl.resumeHistory(suspensionID);
        }
        try {
            hostControl = executionContext.hostControl;
            suspensionID = await hostControl.suspendHistory({
                "documentID": document.id,
                "name": "Image To ComfyUI"
            });
            [layer, isGroup] = await getLayerOrGroupAfterMerged(document, layerID);

            returnData.layerOpacity = layer?.opacity ?? 100;

            const [pixelDataFromAPI, maskDataFromAPI, selectionDataFromAPI] = await Promise.all([
                getPixelsData(document, layer, desireBounds, boundLayerIdentify == SpeicialIDManager.SPECIAL_LAYER_USE_SELECTION),
                getMaskData(document, layer, desireBounds),
                boundLayerIdentify == SpeicialIDManager.SPECIAL_LAYER_USE_SELECTION && document.selection.bounds ? getSelectionData(document, desireBounds) : null,
            ])
            returnData.pixelData = padAndTrimLayerDataToDesireBounds(document, layer, pixelDataFromAPI, desireBounds)
            if (maskDataFromAPI || selectionDataFromAPI) {
                const maskData = maskDataFromAPI && padAndTrimLayerDataToDesireBounds(document, layer, maskDataFromAPI, desireBounds)
                const selectionData = selectionDataFromAPI && padAndTrimLayerDataToDesireBounds(document, layer, selectionDataFromAPI, desireBounds)
                for (let i = 0, length = returnData.pixelData.length / 4; i < length; i++) {
                    const maskPixel = maskData ? maskData[i] / 255 : 1;
                    const selectionPixel = selectionData ? selectionData[i] / 255 : 1;
                    returnData.pixelData[4 * i + 3] = maskPixel * selectionPixel * returnData.pixelData[4 * i + 3];

                    if (!returnData.pixelData[4 * i + 3]) {
                        returnData.pixelData[4 * i] = returnData.pixelData[4 * i + 1] = returnData.pixelData[4 * i + 2] = 0;
                    }
                }
            }

            finalize();

        } catch (e) {
            finalize();
            console.error(e);
            throw e

        }

    }, { commandName: "get content of layer " + layerIdentify })

    const pixelResult = await uploadImage(returnData.pixelData, desireBounds, serverURL, params.isComfy);

    if (pixelResult.error) throw new Error(pixelResult.error);
    if (!pixelResult.name) throw new Error('No upload_name')

    return {
        upload_name: pixelResult.name,
        layer_opacity: returnData.layerOpacity,
    }
}


async function uploadImage(imageData, bounds, serverURL, isComfy) {
    const jimpImage = await new Promise((resolve, reject) => {
        // if (isMask) {
        //     new Jimp(bounds.width, bounds.height, '#ffffffff', (err, image) => {
        //         imageData.forEach((pixelAlpha, i) => {
        //             image.bitmap.data[i * 4 + 3] = pixelAlpha;
        //         });
        //         err ? reject(err) : resolve(image);
        //     })

        // } else {
        new Jimp({
            data: imageData,
            width: bounds.width,
            height: bounds.height
        }, (err, image) => {
            err ? reject(err) : resolve(image);
        })
        // }
    })
    jimpImage.quality(100);
    const file = await jimpImage.getBufferAsync(Jimp.MIME_PNG);

    const fd = new FormData();
    const PhotoshopBlob = new Blob([file], { type: "image/png" });
    // photoshop25.2- does not support multipart blob and FormData.prototype.get
    const payload = FormData.prototype.get ? PhotoshopBlob : await PhotoshopBlob.arrayBuffer();
    fd.append('image', payload);
    fd.append('overwrite', "true");

    let endpoint = isComfy ? '/upload/image' : '/sdppp_upload'
    return await fetch(serverURL + endpoint, {
        method: 'POST',
        body: fd,
    }).then(res => {
        if (res.status == 200)
            return res.json()
        else
            throw new Error('HTTP ' + res.status)
    })
}