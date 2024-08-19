import { app, imaging, core, action, constants } from "photoshop";
import { SpeicialIDManager, findInAllSubLayer } from '../util.js';
import Jimp from "../library/jimp.min";
import Model from "../model.js";

export default async function sendImages(comfyURL, params) {
    const imageIds = params.image_ids
    const documentIdentify = params.document_identify
    const layerIdentify = params.layer_identify
    const boundsIdentify = params.bounds_identify

    let document = documentIdentify == SpeicialIDManager.SPECIAL_DOCUMENT_CURRENT ?
        app.activeDocument :
        app.documents.find(document => document.id == SpeicialIDManager.getDocumentID(documentIdentify))

    await core.executeAsModal(async () => {
        try {
            const jimps = await Promise.all(imageIds.map(async imageId =>
                await Jimp.read(comfyURL + '/sdppp_download?name=' + imageId)
            ))
            if (!document) document = await app.createDocument({
                width: jimps[0].bitmap.width,
                height: jimps[0].bitmap.width,
                resolution: 72,
                mode: "RGBColorMode",
                fill: "transparent"
            })
            const activeLayers = document.activeLayers;
            const formerVisibles = activeLayers.map(layer => layer.visible);
            await Promise.all(
                imageIds.map(async (imageId, index) => {
                    const pixelJimp = jimps[index]
                    let layerOrGroup;
                    let existingLayerName;
                    let newLayerName;
                    const layerId = SpeicialIDManager.getDocumentID(layerIdentify)

                    if (layerIdentify && layerIdentify != SpeicialIDManager.SPECIAL_LAYER_NEW_LAYER) {
                        layerOrGroup = findInAllSubLayer(document, layerId)
                        // // deal with multiple images
                    }
                    // deal with new layer or id/name not found layer
                    if (!layerOrGroup || (layerOrGroup.kind == "group")) {
                        newLayerName = existingLayerName ?? 'Images ' + imageId
                        const newLayer = await document.createLayer("pixel", {

                            name: newLayerName,
                        })
                        if (layerOrGroup) newLayer.move(layerOrGroup, "placeInside")
                        else newLayer.move(document.layers[0], 'placeBefore')

                        layerOrGroup = newLayer
                        Model.instance.ignoreNextHistoryChange()
                    }
                    let putPixelsOptions = {
                        documentID: document.id,
                        layerID: layerOrGroup.id,
                        imageData: await imaging.createImageDataFromBuffer(
                            pixelJimp.bitmap.data,
                            {
                                width: pixelJimp.bitmap.width,
                                height: pixelJimp.bitmap.height,
                                components: 4,
                                colorSpace: "RGB"
                            }
                        ),
                        replace: true,
                    }
                    let bounds = null

                    if (boundsIdentify == SpeicialIDManager.SPECIAL_LAYER_USE_SELECTION) {
                        if (document.selection.bounds) {
                            bounds = document.selection.bounds
                        }
                    } else if (boundsIdentify == SpeicialIDManager.SPECIAL_LAYER_USE_CANVAS) {
                        bounds = { width: document.width, height: document.height };
                        bounds.left = bounds.top = bounds.right = bounds.bottom = 0;
                    } else {
                        const boundLayer = SpeicialIDManager.getLayerID(boundsIdentify)
                        bounds = findInAllSubLayer(document, boundLayer)?.bounds
                    }

                    if (!bounds && !newLayerName) {
                        let bounds = layerOrGroup.bounds
                        if (
                            !(bounds.left == 0 && bounds.top == 0 && bounds.right == 0 && bounds.bottom == 0) &&
                            bounds.width != pixelJimp.bitmap.width || bounds.height != pixelJimp.bitmap.height
                        ) {
                            if (bounds.width <= 1 && bounds.height <= 1) {
                                bounds.left = pixelJimp.bitmap.width / 2
                                bounds.top = pixelJimp.bitmap.height / 2
                            }
                            let centerBounds = {}
                            centerBounds.left = bounds.left + (bounds.width - pixelJimp.bitmap.width) / 2
                            centerBounds.top = bounds.top + (bounds.height - pixelJimp.bitmap.height) / 2
                            centerBounds.right = bounds.left + pixelJimp.bitmap.width
                            centerBounds.bottom = bounds.top + pixelJimp.bitmap.height
                            centerBounds.width = pixelJimp.bitmap.width
                            centerBounds.height = pixelJimp.bitmap.height
                            bounds = centerBounds
                        }
                    }
                    if (bounds) {
                        putPixelsOptions.targetBounds = bounds
                    }
                    await imaging.putPixels(putPixelsOptions)
                    if (bounds) {
                        const selectionBounds = document.selection.bounds;
                        let selectionData;
                        if (selectionBounds) {
                            selectionData = await imaging.getSelection({})
                            await document.selection.deselect();
                        }
                        await layerOrGroup.scale(bounds.width / pixelJimp.bitmap.width * 100, bounds.height / pixelJimp.bitmap.height * 100, constants.AnchorPosition.TOPLEFT);
                        if (selectionBounds) {
                            await imaging.putSelection({
                                imageData: selectionData.imageData,
                                targetBounds: selectionData.sourceBounds
                            })
                        }
                    }
                    if (newLayerName) {
                        layerOrGroup.selected = false;
                    }

                    Model.instance.ignoreNextHistoryChange()
                })
            )
            activeLayers.forEach((formerActiveLayer, index) => {
                formerActiveLayer.selected = true
                formerActiveLayer.visible = formerVisibles[index];
            });
        } catch (e) {
            console.error(e);
            throw e;
        }
    })
    return {}
}