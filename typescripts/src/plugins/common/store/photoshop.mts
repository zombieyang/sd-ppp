import { MainStore, StoreMutation } from "../../../common/store/store.mjs";
export type Identify = never;

export interface LayerData {
    id: number,
    name: string,
    identify: Identify,
    level: number,
    fullPath: string
}
export interface DocumentData {
    name: string
    id: number
    identify: Identify
    layers: LayerData[]
}


export interface PhotoshopDataDocument {
    [id: number]: DocumentData
}
export interface PhotoshopStoreData {
    uname: string // userpath name
    comfyUserToken: string

    activeDocumentID: number  // active document name
    documents: PhotoshopDataDocument

    canvasStateID: number  // last PS history state id that triggered image change
    selectionStateID: number  // last PS history state id that triggered selection change
    historyStateID: number  // last PS history state id
}

export class PhotoshopStore extends MainStore<PhotoshopStoreData> {

    constructor(data?: PhotoshopStoreData, version?: number) {
        super(data || {
            uname: '',
            comfyUserToken: '',

            activeDocumentID: 0,
            documents: {},

            canvasStateID: 0,
            selectionStateID: 0,
            historyStateID: 0,
        });
        this._version = version || 0;
    }

    @StoreMutation
    setUName(uid: string) {
        this._data.uname = 'PS_' + uid;
    }

    @StoreMutation
    setDocument(activeDocumentID: number, documents: PhotoshopDataDocument) {
        this._data.activeDocumentID = activeDocumentID;
        this._data.documents = documents;
    }

    @StoreMutation
    setCanvasStateID(historyStateID: number) {
        this._data.canvasStateID = historyStateID;
    }
    @StoreMutation
    setSelectionStateID(historyStateID: number) {
        this._data.selectionStateID = historyStateID;
    }
    @StoreMutation
    setHistoryStateID(historyStateID: number) {
        this._data.historyStateID = historyStateID;
    }
    @StoreMutation
    setComfyUserToken(comfyUserToken: string) {
        this._data.comfyUserToken = comfyUserToken;
    }
}
