import type { Document } from "photoshop/dom/Document";
import type { Layer } from "photoshop/dom/Layer";
import { PhotoshopCallerActions } from "./PhotoshopCallerInterface.mts";

// Add SDPPPBounds type that appears in multiple interfaces
export interface SDPPPBounds {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}

// =========== PSD Interfaces ===========
export interface PSDActions {
    params: {
        action: 'get' | 'extract'
        document_identify: string,
        data?: any,
        fromSSID?: string
    },
    result: any
}

// =========== getImage Interfaces ===========
export interface PixelsAndSize<T> {
    dataFromAPI: T,
    width: number,
    height: number
}

export interface getImageActions {
    params: {
        document_identify: string,
        layer_identify: string,
        boundary?: SDPPPBounds,
        max_wh?: number,
        quality?: number,
    },
    result: {
        // pngData: Uint8Array | null,
        jpegData: Uint8Array | null,
        alphaData: Uint8Array | null
    }
}

// =========== sendImages Interfaces ===========
export type ImageBlobParams = {
    components: number,
    pngData: Blob
} | {
    components: number,
    buffer: Uint8Array,
    width: number,
    height: number
}

export interface sendImagesActions {
    params: {
        image_blobs?: ImageBlobParams[], 
        image_urls?: string[],
        document_identify: string,
        layer_identifies: string[],
        boundaries: SDPPPBounds[],
        new_layer_name?: string
    },
    result: {
        document_identify: string,
        layer_identify: string
    }
}

// =========== getSelection Interfaces ===========
export interface getSelectionActions {
    params: {
        document_identify: string,
        boundary?: SDPPPBounds,
    },
    result: {
        blob: Uint8Array | Uint16Array | Float32Array | null,
        width: number,
        height: number,
    }
}

// =========== getText Interfaces ===========
export interface getTextActions {
    params: {
        document_identify: string,
        layer_identify: string
    },
    result: {
        text: string
    }
}

// =========== sendText Interfaces ===========
export interface sendTextActions {
    params: {
        document_identify: string,
        layer_identify: string,
        text: string
    },
    result: {
        success: boolean
    }
}

// =========== getLayerInfo Interfaces ===========
export interface getLayerInfoActions {
    params: {
        document_identify: string,
        layer_identify: string
    },
    result: {
        boundary: SDPPPBounds,
        name: string,
        // kind: number,
        // visible: boolean,
        opacity: number,
        isGroup: boolean,
        identify: string
    }
}

// =========== getDocumentInfo Interfaces ===========
export interface getDocumentInfoActions {
    params: {
        document_identify: string
    },
    result: {
        document_boundary: SDPPPBounds,
        selection_boundary: SDPPPBounds
    }
}

// =========== getLayersInGroup and getLinkedLayers shared interface ===========
export interface LayerReducerActions {
    params: {
        document_identify: string,
        layer_identifies: string[],
        select: string
    },
    result: {
        layer_identifies: string[],
        layer_boundaries: SDPPPBounds[],
        layer_infos: getLayerInfoActions['result'][]
    }
}

// =========== runPhotoshopAction Interfaces ===========
export interface RunPhotoshopActionOnLayerActions {
    params: {
        action_set: string,
        action: string,
        layer_identify: string,
        document_identify: string
    },
    result: {
        success: boolean
    }
}

// =========== getSpecialIdentifierValue Interfaces ===========
export interface getSpecialIdentifierValueActions {
    params: {
        identifier: string
        width?: number,
        height?: number
    },
    result: {
        value: string
    }
}
// Main interface that aggregates all action types
export interface PhotoshopCalleeActions {
    psd: PSDActions;
    getImage: getImageActions;
    sendImages: sendImagesActions;
    getSelection: getSelectionActions;
    getText: getTextActions;
    sendText: sendTextActions;
    getLayerInfo: getLayerInfoActions;
    getDocumentInfo: getDocumentInfoActions;
    getLinkedLayers: LayerReducerActions;
    getLayersInGroup: LayerReducerActions;
    runPhotoshopActionOnLayer: RunPhotoshopActionOnLayerActions;
    getSpecialIdentifierValue: getSpecialIdentifierValueActions;
}

// // PhotoshopCaller actions interface (referenced in PhotoshopCallee)
// export interface PhotoshopCallerActions {
//     extractPSD: {
//         params: {
//             from_sid: string
//         },
//         result: any
//     },
//     uploadImage: {
//         params: {
//             data: Uint8Array,
//             image_name?: string
//         },
//         result: {
//             success: boolean,
//             path?: string
//         }
//     }
// }

// Main interface for the Photoshop Callee
export interface PhotoshopCallee {
    callForPSDExtract(sid: string, params: PhotoshopCallerActions['extractPSD']['params']): any;
    uploadImage(sid: string, params: PhotoshopCallerActions['uploadImage']['params']): Promise<PhotoshopCallerActions['uploadImage']['result']>;
}
