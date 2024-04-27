import { app, imaging } from "photoshop";
import { executeAsModalUntilSuccess} from '../util.js';
import Jimp from "../library/jimp.min";

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
    const layerName = params.layer_name
    await Promise.all(
        imageIds.map(async imageId => {
            let layer;
            let existingLayerName;
            let newLayerName;
            await executeAsModalUntilSuccess(async () => {
                try {
                    if (layerName && layerName != "### New Layer ###") {
                        let imageIndexSuffix = ""
                        if (imageIds.length > 1){
                            imageIndexSuffix = ` ${imageIds.indexOf(imageId)}`
                        }
                        existingLayerName = layerName + imageIndexSuffix
                        layer = await app.activeDocument.layers.find(l => l.name == existingLayerName)
                    }
                    if (!layer) {
                        newLayerName = existingLayerName ?? 'Comfy Images ' + imageId
                        layer = await app.activeDocument.createLayer("pixel", {
                            name: newLayerName
                        })
                    }
                } catch(e) {
                    console.error(e)
                    throw e
                }
            })

            const jimp = (await Jimp.read(comfyURL + '/finished_images?id=' + imageId))
            autocrop(jimp)
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
            await executeAsModalUntilSuccess(async () => {
                await imaging.putPixels(putPixelsOptions)
            })
        })
    )
    return {}
}