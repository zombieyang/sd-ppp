
export type WidgetTableValue = Record<number, any[]>
export interface WidgetTableStructureNode {
    id: number;
    title: string;
    widgets: {
        // value: string;
        name?: string;
        outputType: string;
        options?: any;

        uiWeight?: number;
    }[];
    uiWeightSum: number
}
export interface WidgetTableStructureGroup {
    id: number;
    name: string,
    color: string,
    nodeIDs: number[]
}
export interface WidgetTableStructure {
    widgetTableID: string,
    widgetTablePath: string,
    widgetTablePersisted: boolean,
    nodes: Record<number, WidgetTableStructureNode>
    groups: Record<number, WidgetTableStructureGroup>
    nodeIndexes: number[]
    extraOptions: Record<string, any>
}

export interface ComfyStatus {
    progress: number;
    queueSize: number;
    lastError: string;
    executingNodeTitle: string;
    ssid?: string;
    sid?: string;
}
