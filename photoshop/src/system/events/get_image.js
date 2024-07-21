import { app, imaging } from "photoshop";
import { SpeicialIDManager, executeAsModalUntilSuccess, findInAllSubLayer, unTrimImageData } from '../util.js';
import Jimp from "../library/jimp.min";

function isFolder(layer) {
    return layer.kind == "group"
}

async function findLayer(document, layerID) {
    let layer;
    let layerIsFolder = false;
    if (layerID <= 0) return [layer, layerIsFolder];
    layer = findInAllSubLayer(document, layerID)
    if (!layer) throw new Error(`Layer(id: ${layerID}) not found`);
    if (!isFolder(layer)) return [layer, layerIsFolder];

    // layer is folder
    let visibleOriginal = true;
    if (!layer.visible) {
        layer.visible = true;
        visibleOriginal = false;
    }
    const dupLayer = await layer.duplicate();
    const mergedLayer = await dupLayer.merge()
    layerIsFolder = true;
    if (!visibleOriginal) layer.visible = false
    return [mergedLayer, layerIsFolder];
}

// ps returns trimmed data so need padding
function padAndTrimLayerDataToDesireBounds(document, layer, pixelDataFromAPI, desireBounds) {
    if (pixelDataFromAPI.length == desireBounds.width * desireBounds.height * 4) {
        return pixelDataFromAPI;
    }
    let pixelDataForReturn = new Uint8Array(desireBounds.width * desireBounds.height * 4);
    let bounds = {
        left: 0,
        top: 0,
        right: document.width,
        bottom: document.height,
    }
    if (layer) bounds = layer.bounds;
    unTrimImageData(
        pixelDataFromAPI,
        pixelDataForReturn,
        bounds,
        desireBounds
    )
    return pixelDataForReturn;
}

async function getPixelsDataHelper(document, layer, desireBounds) {
    let options = {
        documentID: document.id,
        applyAlpha: false,
        sourceBounds: desireBounds,
    }
    if (layer) options.layerID = layer.id
    let pixels;
    try {
        pixels = await imaging.getPixels(options)
    } catch (e) {
        console.error(e.message)
        return new Uint8Array(desireBounds.width * desireBounds.height * 4);
    }
    let psImageData = pixels.imageData
    const pixelDataFromAPI = await psImageData.getData()
    Promise.resolve().then(() => { psImageData.dispose() })
    return pixelDataFromAPI
}

async function getPixelsData(document, layer, desireBounds) {
    // layer null = document data
    if (!layer) {
        return await getPixelsDataHelper(document, null, desireBounds);
    }
    // normal layer
    return await getPixelsDataHelper(document, layer, desireBounds);
}


function getDesiredBounds(document, boundLayerIdentify, layerIdentify) {
    const boundsLayerID = boundLayerIdentify == SpeicialIDManager.SPECIAL_LAYER_SAME_AS_LAYER ?
        SpeicialIDManager.getLayerID(layerIdentify) :
        SpeicialIDManager.getLayerID(boundLayerIdentify)

    const docBounds = {
        left: 0,
        top: 0,
        right: document.width,
        bottom: document.height,
        width: document.width,
        height: document.height
    };
    if (boundLayerIdentify == SpeicialIDManager.SPECIAL_LAYER_USE_CANVAS) {
        return docBounds;
    }
    // use selection bounds
    if (boundLayerIdentify == SpeicialIDManager.SPECIAL_LAYER_USE_SELECTION) {
        // if no selection use document bounds
        const selectionBounds = document.selection?.bounds;
        if (!selectionBounds) return docBounds;
        return {
            left: selectionBounds.left,
            top: selectionBounds.top,
            right: selectionBounds.right,
            bottom: selectionBounds.bottom,
            width: selectionBounds.width,
            height: selectionBounds.height
        }
    }
    let boundsLayer;
    if (boundsLayerID > 0) {
        boundsLayer = findInAllSubLayer(document, boundsLayerID)
    }
    if (!boundsLayer) throw new Error(`Bounds layer(id: ${boundsLayerID}) not found`);
    const boundsLayerBounds = boundsLayer.bounds
    const isEmptyBoundsLayer = boundsLayerBounds.left == 0 && boundsLayerBounds.top == 0 && boundsLayerBounds.right == 0 && boundsLayerBounds.bottom == 0;
    if (isEmptyBoundsLayer) return docBounds;
    // normal layer
    let desireBounds = {
        left: boundsLayerBounds.left,
        top: boundsLayerBounds.top,
        right: boundsLayerBounds.right,
        bottom: boundsLayerBounds.bottom,
        width: boundsLayerBounds.width,
        height: boundsLayerBounds.height
    };
    return desireBounds
}

export default async function getImage(serverURL, params) {
    const documentIdentify = params.document_identify
    let document = documentIdentify == SpeicialIDManager.SPECIAL_DOCUMENT_CURRENT ?
        app.activeDocument :
        app.documents.find(document => document.id == SpeicialIDManager.getDocumentID(documentIdentify))
    if (!document) throw new Error('document not found');

    const layerIdentify = params.layer_identify
    const boundLayerIdentify = params.bound_layer_identify
    const desireBounds = getDesiredBounds(document, boundLayerIdentify, layerIdentify)
        ;
    let pixelDataForReturn = null;
    let layerOpacity = 100;
    const layerID = SpeicialIDManager.getLayerID(layerIdentify); 

    const startTime = Date.now();
    await executeAsModalUntilSuccess(async (executionContext) => {
        let hostControl;
        let suspensionID;
        let layer;
        let isFolder = false;
        const activeLayers = document.activeLayers;
        try {
            hostControl = executionContext.hostControl;
            suspensionID = await hostControl.suspendHistory({
                "documentID": document.id,
                "name": "Image To ComfyUI"
            });
            [layer, isFolder] = await findLayer(document, layerID);
            layerOpacity = layer?.opacity ?? 100;
            const pixelDataFromAPI = await getPixelsData(document, layer, desireBounds)
            pixelDataForReturn = padAndTrimLayerDataToDesireBounds(document, layer, pixelDataFromAPI, desireBounds)
            console.log('getPixels', Date.now() - startTime, 'ms');
        } catch (e) {
            console.error(e);
            throw e

        } finally {
            if (layer && isFolder) {
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

    }, { commandName: "get content of layer " + layerIdentify })

    try {
        // log desire size
        const image = await new Promise((resolve, reject) => {
            new Jimp({
                data: pixelDataForReturn,
                width: desireBounds.width,
                height: desireBounds.height
            }, (err, image) => {
                err ? reject(err) : resolve(image);
            })
        })
        image.quality(100);
        const file = await image.getBufferAsync(Jimp.MIME_PNG);
        console.log('create pngfile', Date.now() - startTime, 'ms');

        const fd = new FormData();
        const PhotoshopBlob = new Blob([file], { type: "image/png" });
        fd.append('image', PhotoshopBlob, "PhotoshopBlob.png");
        fd.append('overwrite', "true");
        console.log('start upload', Date.now() - startTime, 'ms');
        let endpoint = params.isComfy ? '/upload/image' : '/sdppp_upload'
        const promise = fetch(serverURL + endpoint, {
            method: 'POST',
            body: fd,
        }).then(res => {
            if (res.status == 200)
                return res.json()
            else
                throw new Error('HTTP ' + res.status)
        })
        console.log('finish upload', Date.now() - startTime, 'ms')
        const result = await promise
        console.log('upload resulted', Date.now() - startTime, 'ms')

        if (result.error) throw new Error(result.error);
        if (!result.name) throw new Error('No upload_name')

        return {
            upload_name: result.name,
            layer_opacity: layerOpacity,
        }
    } catch (e) {
        console.error(e);
        throw e
    }
}