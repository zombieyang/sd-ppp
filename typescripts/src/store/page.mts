import { MainStore, StoreMutation } from "../common/store/store.mts";
import { WidgetTableStructure, WidgetTableValue } from "../types/sdppp";

export interface PageStoreData {
    title: string
    webviewFromSid: string,

    progress: number
    queueSize: number
    lastError: string
    executingNodeTitle: string

    widgetTableStructure: WidgetTableStructure
    widgetTableValue: WidgetTableValue
    widgetTableErrors: Record<string, string>,
    useSliderForNumberWidget: boolean
    // lastOpenedWorkflow: string

    hasPSDNodes: boolean
    comfyUserToken: string
    comfyOrgLoggedIn: boolean
    comfyOrgAPIKey: string
}

export class PageStore extends MainStore<PageStoreData> {

    constructor(data?: PageStoreData, version?: number) {
        super(data || {
            title: '',
            webviewFromSid: location.search.match(/webview_fromsid=([^&]+)/)?.[1] || '',

            progress: 0,
            lastError: '',
            queueSize: 0,
            executingNodeTitle: "",

            widgetTableStructure: {
                widgetTablePath: '',
                widgetTablePersisted: false,
                widgetTableID: '',
                nodes: {},
                groups: {},
                nodeIndexes: [],
                extraOptions: {}
            },
            widgetTableValue: {},
            widgetTableErrors: {},
            useSliderForNumberWidget: false,
            // lastOpenedWorkflow: '',

            hasPSDNodes: false,
            comfyUserToken: '',
            comfyOrgLoggedIn: false,
            comfyOrgAPIKey: ''
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
    setLastError(lastError: string) {
        this._data.lastError = lastError;
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
    setWidgetTableStructure(widgetTableStructure: PageStoreData['widgetTableStructure']) {
        this._data.widgetTableStructure = JSON.parse(JSON.stringify(widgetTableStructure));
    }
    @StoreMutation
    setWidgetTableValue(widgetTableValue: PageStoreData['widgetTableValue']) {
        this._data.widgetTableValue = JSON.parse(JSON.stringify(widgetTableValue));
    }
    @StoreMutation
    setWidgetTableErrors(widgetTableErrors: PageStoreData['widgetTableErrors']) {
        this._data.widgetTableErrors = JSON.parse(JSON.stringify(widgetTableErrors));
    }
    @StoreMutation
    setHasPSDNodes(hasPSDNodes: boolean) {
        this._data.hasPSDNodes = hasPSDNodes;
    }

    @StoreMutation
    setComfyUserToken(comfyUserToken: string) {
        this._data.comfyUserToken = comfyUserToken;
    }

    @StoreMutation
    setComfyOrgLoggedIn(comfyOrgLoggedIn: boolean) {
        this._data.comfyOrgLoggedIn = comfyOrgLoggedIn;
    }

    @StoreMutation
    setComfyOrgAPIKey(comfyOrgAPIKey: string) {
        this._data.comfyOrgAPIKey = comfyOrgAPIKey;
    }

    @StoreMutation
    setUseSliderForNumberWidget(useSliderForNumberWidget: boolean) {
        this._data.useSliderForNumberWidget = useSliderForNumberWidget;
    }
}
