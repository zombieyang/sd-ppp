declare module "uxp" {
    export const shell: any;
    export const storage: any;
    export const userInfo: any;
    export const entrypoints: any;
    export const host: {
        version: string;
    };
}
declare module "SDPPPInternal" {
    export function SDPPPProvider({ children }: { children: React.ReactNode });
    export function useSDPPPContext(): {
        connectOrDisconnect: () => void,
        lastConnectErrorMessage: string,
        setAutoRunning: (autoRunning: { type: 'workflow' | 'page', value: string } | null) => void,
        autoRunning: { type: 'workflow' | 'page', value: string } | null,

        photoshopSID: string,
        webviewAgentSID: string,
        workflowAgentSID: string,
        setWorkflowAgentSID: (workflowAgentSID: string) => void,

        showWebviewDialog: () => void;
    }

    export function useSDPPPComfyCaller(): {
        lastOpenedWorkflow: string;
        openWorkflow: (workflowAgentSID: string, workflow_path: string, reset: boolean) => Promise<void>;
        reopenWorkflow: (workflowAgentSID: string) => Promise<void>;
        saveWorkflow: (workflowAgentSID: string) => Promise<void>;
        runPage: (agentSID?: string, size?: number) => Promise<void>;
        runWorkflow: (workflowPath: string, agentSID?: string, size?: number) => Promise<void>;
        callForPSDExtract: (workflowAgentSID: string) => Promise<void>;
        logout: (workflowAgentSID: string) => Promise<void>;
        uploadImage: (image: Uint8Array, filename: string) => Promise<{
            name: string;
            type: string;
            subfolder: string;
        } | undefined>;
    }

    export interface SDPPPWebpageInstance {
        sid: string,
        ssid: string,
        title: string,
        lastError: string,
        isWebview: boolean,
        isCurrentUser: boolean
    }
    export function useSDPPPWebpageList(): {
        pageInstances: SDPPPWebpageInstance[]
    }

    export function useSDPPPWorkflowList(): {
        workflows: {
            [path: string]: {
                path: string,
                content: any,
                error: string | ''
            }
        },
        isLoadingWorkflows: boolean,
        workflowsError: string,
        refetchWorkflows: () => void,
        afterPropsUpdate4s: boolean,
        currentViewingDirectory: string,
        setCurrentViewingDirectory: (currentViewingDirectory: string) => void,
        showingList: {
            path: string,
            isDir: boolean
        }[]
    }
    export const useAgentState: (agentSID: string) => {
        sid: string,
        ssid: string,
        title: string,
        lastError: string,
        isWebview: boolean,
        isCurrentUser: boolean,
        progress: number,
        executingNodeTitle: string,
        queueSize: number,
    }
    export function SDPPP(props: {
        renderContent: (
            connectState: 'connected' | 'disconnected' | 'connecting',
            addressBar: AddressBarType,
            workflowEditor: WorkflowEditPhotoshopType
        ) => React.ReactNode
    })

    export type AddressBarType = () => JSX.Element;
    export type WorkflowEditPhotoshopType = () => JSX.Element;

}