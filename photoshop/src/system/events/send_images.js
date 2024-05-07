import { app, imaging } from "photoshop";
import { executeAsModalUntilSuccess} from '../util.js';
import Jimp from "../library/jimp.min";

const SPECIAL_LAYER_USE_CANVAS = '### Use Canvas ###'
const SPECIAL_LAYER_USE_SELECTION = '### Use Selection ###'
const SPECIAL_LAYER_NEW_LAYER = '### New Layer ###'
const SPECIAL_LAYER_SAME_AS_LAYER = '### Same as Layer ###'
const SPECIAL_LAYER_NAME_TO_ID = {
    SPECIAL_LAYER_USE_CANVAS: 0,
    SPECIAL_LAYER_USE_SELECTION: -1,
    SPECIAL_LAYER_NEW_LAYER: -2,
    SPECIAL_LAYER_SAME_AS_LAYER: -3
}

function autocrop(jimp) {
    let minX = jimp.bitmap.width - 1;
    let minY = jimp.bitmap.height - 1;
    let maxX = 0;
    let maxY = 0;

    jimp.scan(0, 0, jimp.bitmap.width, jimp.bitmap.height, function(x, y, idx) {
        const alpha = this.bitmap.data[idx + 3];
        if (alpha !== 0) {
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    });

    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    jimp.crop(minX, minY, width, height);
    return jimp
}

export default async function sendImages(comfyURL, params) {
    const imageIds = params.image_ids
    const layerId = params.layer_id
    await Promise.all(
        imageIds.map(async imageId => {
            let layer;
            let existingLayerName;
            let newLayerName;
            await executeAsModalUntilSuccess(async () => {
                try {
                    if (layerId && layerId != SPECIAL_LAYER_NAME_TO_ID[SPECIAL_LAYER_NEW_LAYER]) {
                        layer = await app.activeDocument.layers.find(l => l.id == layerId)
                        // deal with multiple images
                        let imageIndexSuffix = ""
                        console.log("imageIds.length: ", imageIds.length)
                        if (imageIds.length > 1){
                            index = imageIds.indexOf(imageId)
                            console.log("imageIds.index: ", index)
                            if (index > 0)
                                imageIndexSuffix = ` ${index}`
                        }
                        if (imageIndexSuffix != "" && layer != null){
                            const layerName = layer?.name;
                            existingLayerName = layerName + imageIndexSuffix
                            console.log("existingLayerName: ", existingLayerName)
                            layer = await app.activeDocument.layers.find(l => l.name == existingLayerName)
                        }
                    }
                    // deal with new layer or id/name not found layer
                    if (!layer) {
                        newLayerName = existingLayerName ?? 'Comfy Images ' + imageId
                        console.log("newLayerName: ", newLayerName)
                        layer = await app.activeDocument.createLayer("pixel", {
                            name: newLayerName
                        })
                    }
                    const jimp = (await Jimp.read(comfyURL + '/finished_images?id=' + imageId))
                    autocrop(jimp)
                    console.log("layer name ", layer.name)
                    let putPixelsOptions = {
                        layerID: layer.id,
                        imageData: await imaging.createImageDataFromBuffer(
                            jimp.bitmap.data,
                            {
                                width: jimp.bitmap.width,
                                height: jimp.bitmap.height,
                                components: 4,
                                colorSpace: "RGB"
                            }
                        ),
                        replace: true,
                    }
                    if (!newLayerName) {
                        let bounds = layer.bounds
                        if (bounds.width != jimp.bitmap.width || bounds.height != jimp.bitmap.height) {
                            if (bounds.width <= 1 && bounds.height <= 1) {
                                bounds.left = jimp.bitmap.width / 2
                                bounds.top = jimp.bitmap.height / 2
                            }
                            let centerBounds = {}
                            centerBounds.left = bounds.left + (bounds.width - jimp.bitmap.width) / 2
                            centerBounds.top = bounds.top + (bounds.height - jimp.bitmap.height) / 2
                            centerBounds.right = bounds.left + jimp.bitmap.width
                            centerBounds.bottom = bounds.top + jimp.bitmap.height
                            centerBounds.width = jimp.bitmap.width
                            centerBounds.height = jimp.bitmap.height
                            bounds = centerBounds
                        }
                        putPixelsOptions.targetBounds = bounds
                    }
                    await imaging.putPixels(putPixelsOptions)
                } catch(e) {
                    console.error(e)
                    throw e
                }
            })
        })
    )
    return {}
}