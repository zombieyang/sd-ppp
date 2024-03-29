
export function unTrimImageData(
    fromImageDataArray,
    toImageDataArray,
    fromImageBound,
    toImageSize
) {
    const boundLeft = fromImageBound.left;
    const boundTop = fromImageBound.top;
    const boundRight = fromImageBound.right;
    const boundBottom = fromImageBound.bottom;

    const toWidth = toImageSize.width;
    const toHeight = toImageSize.height;

    const toLength = toWidth * toHeight * 4;
    if (toImageDataArray.length !== toLength) {
        throw new Error(`toImageDataArray.length(${toImageDataArray.length}) !== toLength(${toLength})`);
    }
    if (fromImageDataArray.length !== (boundRight - boundLeft) * (boundBottom - boundTop) * 4) {
        throw new Error(`fromImageDataArray.length(${fromImageDataArray.length}) !== boundSize(${(boundRight - boundLeft) * (boundBottom - boundTop) * 4})`);
    }

    for (let i = 0; i < toLength; i += 4) {
        const currentLeft = (i / 4) % toWidth;
        const currentTop = Math.floor((i / 4) / toWidth);
        if (
            !(currentLeft < boundLeft || 
            currentLeft >= boundRight || 
            currentTop < boundTop || 
            currentTop >= boundBottom)
        ) {
            const fromIndex = ((currentTop - boundTop) * (boundRight - boundLeft) + (currentLeft - boundLeft)) * 4;
            const alpha = fromImageDataArray[fromIndex + 3];
            toImageDataArray[i] = alpha == 0 ? 0 : fromImageDataArray[fromIndex];
            toImageDataArray[i + 1] = alpha == 0 ? 0 : fromImageDataArray[fromIndex + 1];
            toImageDataArray[i + 2] = alpha == 0 ? 0 : fromImageDataArray[fromIndex + 2];
            toImageDataArray[i + 3] = alpha;
        }
    }
    return toImageDataArray;
}

export function getAllSubLayer(layer, level = 0) {
    if (!layer.layers) return [];
    return layer.layers.reduce((ret, layer) => {
        ret.push({
            name: '-'.repeat(level) + layer.name,
            id: layer.id
        });
        return ret.concat(getAllSubLayer(layer, level + 1));
    }, []);
}

export function findInAllSubLayer(layer, layerid) {
    if (!layer.layers) return null;
    for (let i = 0; i < layer.layers.length; i++) {
        if (layer.layers[i].id === layerid) return layer.layers[i];

        const result = findInAllSubLayer(layer.layers[i], layerid)
        if (result) return result;
    }
    return null;
}