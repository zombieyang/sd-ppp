import { SDPPPGraphForm } from "../../../common/types"
import { MainStore, StoreMutation } from "../../../common/store/store.mjs"

export interface PageStoreData {
    title: string
    webviewFromSid: string,

    progress: number
    queueSize: number
    lastError: string
    lastErrorNodeID: number
    executingNodeTitle: string

    currentForm: SDPPPGraphForm[]

    hasPSDNodes: boolean
    maxImageWH: number
    comfyUserToken: string
}

export class PageStore extends MainStore<PageStoreData> {

    constructor(data?: PageStoreData, version?: number) {
        super(data || {
            title: '',

            progress: 0,
            lastError: '',
            lastErrorNodeID: 0,
            queueSize: 0,
            executingNodeTitle: "",

            webviewFromSid: location.search.match(/webview_fromsid=([^&]+)/)?.[1] || '',

            currentForm: [],
            hasPSDNodes: false,
            maxImageWH: 60606,
            comfyUserToken: ''
        });
        this._version = version || 0;
    }
    @StoreMutation
    setWebviewFromSid(webviewFromSid: string) {
        this._data.webviewFromSid = webviewFromSid;
    }
    @StoreMutation
    setTitle(title: string) {
        this._data.title = title;
    }
    @StoreMutation
    setProgress(progress: number) {
        this._data.progress = progress;
    }
    @StoreMutation
    setLastError(lastError: string, nodeID: number) {
        this._data.lastError = lastError;
        this._data.lastErrorNodeID = nodeID;
    }
    @StoreMutation
    setQueueSize(queueSize: number) {
        this._data.queueSize = queueSize;
    }
    @StoreMutation
    setExecutingNodeTitle(executingNodeTitle: string) {
        this._data.executingNodeTitle = executingNodeTitle;
    }
    @StoreMutation
    setCurrentForm(currentForm: PageStoreData['currentForm']) {
        currentForm = JSON.parse(JSON.stringify(currentForm));
        this._data.currentForm = currentForm;
    }
    @StoreMutation
    setHasPSDNodes(hasPSDNodes: boolean) {
        this._data.hasPSDNodes = hasPSDNodes;
    }

    @StoreMutation
    setMaxImageWH(maxImageWH: number) {
        this._data.maxImageWH = maxImageWH;
    }

    @StoreMutation
    setComfyUserToken(comfyUserToken: string) {
        this._data.comfyUserToken = comfyUserToken;
    }
}
