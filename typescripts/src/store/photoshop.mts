import { MainStore, StoreMutation } from "../common/store/store.mts";
export type Identify = never;

export interface LayerData {
    id: number,
    name: string,
    identify: Identify,
    level: number,
    fullPath: string,
    dirtyID: number
}
export interface DocumentData {
    name: string
    id: number
    identify: Identify
    layers: LayerData[]
    canvasDirtyID: number
    selectionDirtyID: number
}


export interface PhotoshopDataDocument {
    [id: number]: DocumentData
}
export interface PhotoshopStoreData {
    uname: string // random string instance name
    comfyUserToken: string
    isLocal: boolean

    activeDocumentID: number  // active document name
    documents: PhotoshopDataDocument

    actions: string[]

    canvasStateID: number  // last PS history state id that triggered image change
    selectionStateID: string  // last PS history state id that triggered selection change
    historyStateID: number  // last PS history state id
}

export class PhotoshopStore extends MainStore<PhotoshopStoreData> {

    constructor(data?: PhotoshopStoreData, version?: number) {
        super(data || {
            uname: '',
            comfyUserToken: '',
            isLocal: false,

            activeDocumentID: 0,
            documents: {},

            actions: [],

            canvasStateID: 0,
            selectionStateID: '',
            historyStateID: 0,
        });
        this._version = version || 0;
    }

    @StoreMutation
    setIsLocal(isLocal: boolean) {
        this._data.isLocal = isLocal;
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
    setSelectionStateID(selectionState: string) {
        this._data.selectionStateID = selectionState;
    }
    @StoreMutation
    setHistoryStateID(historyStateID: number) {
        this._data.historyStateID = historyStateID;
    }
    @StoreMutation
    setComfyUserToken(comfyUserToken: string) {
        this._data.comfyUserToken = comfyUserToken;
    }
    @StoreMutation
    setActions(actions: string[]) {
        this._data.actions = actions;
    }
}
