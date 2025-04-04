import { parseDocumentIdentify } from "../../../common/photoshop/identify.mjs";
import { SpeicialIDManager } from "../../../common/photoshop/specialLayer.mjs";
import { DocumentData, Identify, PhotoshopStore } from "./photoshop.mjs";


export class PhotoshopStoreHelper {
    static makeDocumentDataOptions(photoshopStore: PhotoshopStore): Identify[] {
        const PhotoshopStoreData = photoshopStore.data;
        const options: string[] = [`${SpeicialIDManager.getSpecialDocumentCurrent()}`]
        Object.keys(PhotoshopStoreData.documents)
            .forEach(documentID => {
                const document = PhotoshopStoreData.documents[documentID as any];
                options.push(document.identify)
            });
        return options as Identify[];
    }
    static findDocumentData(photoshopStore: PhotoshopStore, identify: string) {
        const documentID = SpeicialIDManager.is_SPECIAL_DOCUMENT_CURRENT(identify) ?
            photoshopStore.data.activeDocumentID :
            parseDocumentIdentify(identify).id;
        return photoshopStore.data.documents[documentID];
    }
    static makeLayerOptions(documentData: DocumentData, extraOptions: string[]) {
        let options = extraOptions.concat(
            documentData.layers.map(layer => layer.identify)
        );

        return options
    }
}
