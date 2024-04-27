import { app, imaging } from "photoshop";
import { executeAsModalUntilSuccess, findInAllSubLayer, unTrimImageData } from '../util.js';
import Jimp from "../library/jimp.min";

function isLayerFolder(layer){
    return layer.layers && layer.layers.length > 0;
}

async function findLayer(layerID) {
    let layer;
    let isFolder = false;
    if (layerID <= 0) return [layer, isFolder];
    layer = findInAllSubLayer(app.activeDocument, layerID)
    if (!layer) throw new Error(`Layer(id: ${layerID}) not found`);
    if (!isLayerFolder(layer)) return [layer, isFolder];
    // layer is folder
    const dupLayer = await layer.duplicate();
    const mergedLayer = await dupLayer.merge()
    isFolder = true;
    return [mergedLayer, isFolder];
}

// ps returns trimmed data so need padding
function padAndTrimLayerDataToDesireBounds(layer, pixelDataFromAPI, desireBounds) {
    if (pixelDataFromAPI.length == desireBounds.width * desireBounds.height * 4) {
        return pixelDataFromAPI;
    }
    let pixelDataForReturn = new Uint8Array(desireBounds.width * desireBounds.height * 4);
    let bounds = {
        left: 0,
        top: 0,
        right: app.activeDocument.width,
        bottom: app.activeDocument.height,
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

async function getPixelsDataHelper(layer, desireBounds) {
    let options = {
        documentID: app.activeDocument.id,
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

async function getPixelsData(layer, desireBounds) {
    // layer null = document data
    if (!layer) {
        return await getPixelsDataHelper(null, desireBounds);
    }
    // normal layer
    return await getPixelsDataHelper(layer, desireBounds);
}


function getDesiredBounds(boundsLayerID) {
    const docBounds = {
        left: 0, 
        top: 0, 
        right: app.activeDocument.width, 
        bottom: app.activeDocument.height,
        width: app.activeDocument.width,
        height: app.activeDocument.height
    };
    // if boundsLayerID == -1, use selection bounds
    if (boundsLayerID == -1) {
        // if no selection use document bounds
        const selectionBounds = app.activeDocument.selection?.bounds;
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
        boundsLayer = findInAllSubLayer(app.activeDocument, boundsLayerID)
        if (!boundsLayer) throw new Error(`Bounds layer(id: ${boundsLayerID}) not found`);
    }
    // null boundsLayer = document bounds
    if (!boundsLayer) return docBounds;
    // empty boundsLayer = document bounds
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

export default async function getImage(comfyURL, params) {
    const layerID = params.layer_id
    const boundsLayerID = params.use_layer_bounds
    let uploadName = 0;
    let layerOpacity = 100;

    await executeAsModalUntilSuccess(async (executionContext) => {
        let hostControl;
        let suspensionID;
        const startTime = Date.now();
        let layer;
        let isFolder = false;
        const activeLayers = app.activeDocument.activeLayers;
        try {
            hostControl = executionContext.hostControl;
            suspensionID = await hostControl.suspendHistory({
                "documentID": app.activeDocument.id,
                "name": "Image To ComfyUI"
            });
            [layer, isFolder] = await findLayer(layerID);
            layerOpacity = layer?.opacity ?? 100;
            const desireBounds = getDesiredBounds(boundsLayerID);
            const pixelDataFromAPI = await getPixelsData(layer, desireBounds)
            const pixelDataForReturn = padAndTrimLayerDataToDesireBounds(layer, pixelDataFromAPI, desireBounds)
            // console.log('getPixels', Date.now() - startTime, 'ms');
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
            // console.log('create pngfile', Date.now() - startTime, 'ms');

            const fd = new FormData();
            const PhotoshopBlob = new Blob([file], { type: "image/png" });
            fd.append('image', PhotoshopBlob, "PhotoshopBlob.png");
            fd.append('overwrite', "true");
            // console.log('start upload', Date.now() - startTime, 'ms');
            const promise = fetch(comfyURL + '/upload/image', {
                method: 'POST',
                body: fd,
            }).then(res => {
                if (res.status == 200)
                    return res.json()
                else
                    throw new Error('HTTP ' + res.status)
            })
            // console.log('finish upload', Date.now() - startTime, 'ms')
            const result = await promise
            // console.log('upload resulted', Date.now() - startTime, 'ms')

            if (result.error) throw new Error(result.error);
            if (!result.name) throw new Error('No upload_name')
            uploadName = result.name

        } catch (e) {
            console.error(e);
            throw e

        } finally {
            if (layer && isFolder) layer.delete();
            if (activeLayers && activeLayers.length > 0) {
                for (let i = 0; i < activeLayers.length; i++) {
                    activeLayers[i].selected = true;
                }
            }
            if (hostControl && suspensionID) await hostControl.resumeHistory(suspensionID);
        }

    }, { commandName: "get content of layer " + layerID })

    return {
        upload_name: uploadName,
        layer_opacity: layerOpacity,
    }
}