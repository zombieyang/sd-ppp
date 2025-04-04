export interface SDPPPGraphForm {
    id: number;
    title: string;
    widgets: {
        value: string;
        name?: string;
        outputType: string;
        options?: any;

        uiWeight?: number;
    }[];
    uiWeightSum: number
}

export interface ComfyStatus {
    progress: number;
    queueSize: number;
    lastError: string;
    executingNodeTitle: string;
    ssid?: string;
    sid?: string;
}
