import { WorkflowCalleeActions } from "./WorkflowCalleeInterface.mts";
import { PageStore } from "../store/page.mts";

export interface WorkflowCaller {
    pageInstanceRun(sid: string, from_sid: string, size?: number): void;
    setWidgetValue(workflowAgent: PageStore | null, params: WorkflowCalleeActions['setWidgetValue']['params']): Promise<void>;
    openWorkflow(workflowAgent: PageStore | null, params: WorkflowCalleeActions['open']['params']): Promise<void>;
    saveWorkflow(workflowAgent: PageStore | null, params: WorkflowCalleeActions['save']['params']): Promise<void>;
    listWorkflows(workflowAgent: PageStore | null, params: WorkflowCalleeActions['list']['params']): Promise<WorkflowCalleeActions['list']['result']>;
    logout(workflowAgent: PageStore | null): Promise<void>;
    interrupt(workflowAgentSID: string): Promise<void>;
    clearQueue(workflowAgentSID: string): Promise<void>;
    reboot(workflowAgentSID: string): Promise<WorkflowCalleeActions['reboot']['result']>;
    setComfyOrgAPIKey(workflowAgentSID: string, api_key: string): Promise<void>;
}

export interface WorkflowCallerActions {
    getStoredWidgetValue: {
        params: {
            widgetTableID: string,
            widgetTablePath: string,
            widgetTablePersisted: boolean,
        },
        result: {
            values: {
                nodeID: number,
                widgetIndex: number,
                value: any
            }[]
        }
    }
}