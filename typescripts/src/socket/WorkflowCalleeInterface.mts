
export interface WorkflowCallee {
    setNodeTitle(params: WorkflowCalleeActions['setNodeTitle']['params']): void;
}
export interface WorkflowCalleeActions {
    run: {
        params: {
            size: number,
            from_sid: string
        }
    }
    setNodeTitle: {
        params: {
            node_id: number,
            title: string
        }
    }
    setWidgetValue: {
        params: {
            values: {
                nodeID: number,
                widgetIndex: number,
                value: any
            }[]
        }
    }
    open: {
        params: {
            workflow_path: string
            from_sid: string
            reset: boolean
        }
    }
    save: {
        params: {
            workflow_path: string
            from_sid: string
        }
    },
    list: {
        params: {
        },
        result: {
            workflows: string[]
        }
    },
    logout: {
        params: {
        }
    },
    interrupt: {
        params: {}
    },
    clearQueue: {
        params: {}
    },
    reboot: {
        params: {},
        result: {
            error?: string,
            success: boolean
        }
    },
    setComfyOrgAPIKey: {
        params: {
            api_key: string
        }
    }
}
