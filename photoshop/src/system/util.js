import { core } from "photoshop";
import '../../../javascript/sdppp-util'
const SpeicialIDManager = globalThis.SDPPPSpeicialIDManager
export { SpeicialIDManager };

export function unTrimImageData(
    intersectImageDataArray,
    toImageDataArray,
    fromImageBounds, 
    toImageBounds
) {
    const fromLeft = fromImageBounds.left;
    const fromTop = fromImageBounds.top;
    const fromRight = fromImageBounds.right;
    const fromBottom = fromImageBounds.bottom;
    const fromWidth = fromRight - fromLeft;
    const fromHeight = fromBottom - fromTop;

    const toLeft = toImageBounds.left;
    const toTop = toImageBounds.top;
    const toRight = toImageBounds.right;
    const toBottom = toImageBounds.bottom;
    const toWidth = toRight - toLeft;
    const toHeight = toBottom - toTop;

    const intersectLeft = Math.max(fromLeft, toLeft);
    const intersectTop = Math.max(fromTop, toTop);
    const intersectRight = Math.min(fromRight, toRight);
    const intersectBottom = Math.min(fromBottom, toBottom);
    const intersectWidth = intersectRight - intersectLeft;
    const intersectHeight = intersectBottom - intersectTop;

    const toLength = toWidth * toHeight * 4;
    if (toImageDataArray.length !== toLength) {
        throw new Error(`toImageDataArray.length(${toImageDataArray.length}) !== toLength(${toLength})`);
    }
    const intersectLength = intersectWidth * intersectHeight * 4;
    if (intersectImageDataArray.length !== intersectLength) {
        throw new Error(`fromImageDataArray.length(${intersectImageDataArray.length}) !== fromLength(${intersectLength})`);
    }

    for (let i = 0; i < toLength; i += 4) {
        const currentLeft = (i / 4) % toWidth + toLeft;
        const currentTop = Math.floor((i / 4) / toWidth) + toTop;
        if (
            currentLeft >= fromLeft &&
            currentLeft < fromRight &&
            currentTop >= fromTop &&
            currentTop < fromBottom
        ) {
            const fromIndex = ((currentTop - intersectTop) * intersectWidth + (currentLeft - intersectLeft)) * 4;
            const alpha = intersectImageDataArray[fromIndex + 3];
            toImageDataArray[i] = alpha == 0 ? 0 : intersectImageDataArray[fromIndex];
            toImageDataArray[i + 1] = alpha == 0 ? 0 : intersectImageDataArray[fromIndex + 1];
            toImageDataArray[i + 2] = alpha == 0 ? 0 : intersectImageDataArray[fromIndex + 2];
            toImageDataArray[i + 3] = alpha;
        }
    }
    return toImageDataArray;
}

export function getAllSubLayer(layer, level = 0) {
    if (!layer?.layers) return [];
    return layer.layers.reduce((ret, layer) => {
        ret.push({
            name: '-'.repeat(level) + layer.name + ` (id:${layer['id']})`,
            id: layer.id
        });
        return ret.concat(getAllSubLayer(layer, level + 1));
    }, []);
}

export function findInAllSubLayer(rootLayer, layerid) {
    if (!rootLayer.layers) return null;
    for (let i = 0; i < rootLayer.layers.length; i++) {
        if (rootLayer.layers[i].id === layerid) return rootLayer.layers[i];

        const result = findInAllSubLayer(rootLayer.layers[i], layerid)
        if (result) return result;
    }
    return null;
}

const executeAsModal = core.executeAsModal;

export async function executeAsModalUntilSuccess(...args) {
    let result;
    let failed = true;
    while(failed) {
        try {
            result = await executeAsModal(...args);
            failed = false;
        } catch (e) {
            if (e.number != 9) {
                failed = false; // This case is hit if the targetFunction throws an exception
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }
    return result;
}