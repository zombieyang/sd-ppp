import { PhotoshopCalleeActions } from "./PhotoshopCalleeInterface.mjs";

export interface PhotoshopCaller {
    importPSDDataURLFromPhotoshop(sid: string, document_identify: string, fromSSID: string): Promise<string>;
    exportPSDDataURLToPhotoshop(sid: string, document_identify: string, dataURL: string, fromSSID: string): Promise<void>;
    // getImage(sid: string, payload: PhotoshopCalleeActions['getImage']['params']): Promise<any>;
    sendImage(sid: string, payload: PhotoshopCalleeActions['sendImages']['params']): Promise<any>;
    getSpecialIdentifierValue(sid: string, payload: PhotoshopCalleeActions['getSpecialIdentifierValue']['params']): Promise<any>;
}

export interface PhotoshopCallerActions {
    extractPSD: {
        params: {
            from_sid: string;
        }
    }
    uploadImage: {
        params: {
            image: Uint8Array;
            filename: string;
            overwrite?: boolean;
        },
        result: {
            name: string;
            type: string;
            subfolder: string;
        }
    },

}