import { Socket, SocketConstructor } from "../../../common/socket/Socket.mts";
import { WorkflowCalleeActions } from "../../../sdsystem/comfy/socket/WorkflowCallee.mts";
import { PageStore } from "../../../sdsystem/common/store/page.mts";
import { getStoredWidgetValue } from "../hooks/widgetable.mts";

export interface WorkflowCaller {
    pageInstanceRun(sid: string, from_sid: string, size?: number): void;
    setWidgetValue(workflowAgent: PageStore | null, params: WorkflowCalleeActions['setWidgetValue']['params']): Promise<void>;
    openWorkflow(workflowAgent: PageStore | null, params: WorkflowCalleeActions['open']['params']): Promise<void>;
    saveWorkflow(workflowAgent: PageStore | null, params: WorkflowCalleeActions['save']['params']): Promise<void>;
    listWorkflows(workflowAgent: PageStore | null): Promise<string[] | { error: string }>;
    logout(workflowAgent: PageStore | null): Promise<void>;
    interrupt(workflowAgentSID: string): Promise<void>;
    clearQueue(workflowAgentSID: string): Promise<void>;
    reboot(workflowAgentSID: string): Promise<WorkflowCalleeActions['reboot']['result']>;
}

export interface WorkflowCallerActions {
    getStoredWidgetValue: {
        params: {
            nodeIndexes: {
                nodeTitle: string,
                widgetIndex: number
            }[]
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

export function WorkflowCallerSocket(SocketClass: SocketConstructor<Socket>) {

    return class extends SocketClass implements WorkflowCaller {

        constructor(url: string) {
            super(url);
            this.socket.on('B_workflow', (payload: {
                action: string,
                params: WorkflowCallerActions['getStoredWidgetValue']['params']
            }, callback: (payload: any) => void) => {
                if (payload.action == 'getStoredWidgetValue') {
                    const { nodeIndexes } = payload.params;
                    const values = nodeIndexes.map(({ nodeTitle, widgetIndex }) => {
                        return {
                            title: nodeTitle,
                            ...getStoredWidgetValue(nodeTitle, widgetIndex)
                        };
                    });
                    callback({ values });
                }
            });
        }

        public async setNodeTitle(sid: string, node_id: number, title: string) {
            await new Promise((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'setNodeTitle',
                    sid,
                    params: { node_id, title }
                }, (payload: any) => {
                    if (payload?.error) {
                        return reject(new Error(payload.error));
                    }
                    resolve(payload);
                });
            });
        }

        public async pageInstanceRun(sid: string, from_sid: string, size: number = 1) {
            await new Promise((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'run',
                    sid,
                    params: { size, from_sid }
                }, (payload: any) => {
                    if (payload?.error) {
                        return reject(new Error(payload.error));
                    }
                    resolve(payload);
                });
            });
        }

        public async setWidgetValue(workflowAgent: PageStore | null | undefined, setter: WorkflowCalleeActions['setWidgetValue']['params']) {
            if (!workflowAgent) {
                return;
            }
            await new Promise((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'setWidgetValue',
                    sid: workflowAgent.data.sid,
                    params: setter
                }, (payload: any) => {
                    if (payload?.error) {
                        return reject(new Error(payload.error));
                    }
                    resolve(payload);
                });
            })
        }

        public async openWorkflow(workflowAgent: PageStore | null | undefined, params: WorkflowCalleeActions['open']['params']) {
            if (!workflowAgent) {
                return;
            }
            await new Promise<any>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'open',
                    sid: workflowAgent.data.sid,
                    params
                }, (payload: any) => {
                    if (payload?.error) {
                        return reject(new Error(payload.error));
                    }
                    resolve(payload);
                });
            });
        }

        public async saveWorkflow(workflowAgent: PageStore | null | undefined, params: WorkflowCalleeActions['save']['params']) {
            if (!workflowAgent) {
                return;
            }
            await new Promise<any>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'save',
                    sid: workflowAgent.data.sid,
                    params
                }, (payload: any) => {
                    if (payload?.error) {
                        return reject(new Error(payload.error));
                    }
                    resolve(payload);
                });
            })
        }

        public async listWorkflows(workflowAgent: PageStore | null) {
            if (!workflowAgent) {
                return [];
            }
            return await new Promise<string[]>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'list',
                    sid: workflowAgent.data.sid
                }, (payload: any) => {
                    resolve(payload);
                });
            })
        }
        public async logout(workflowAgent: PageStore | null | undefined) {
            if (!workflowAgent) {
                return;
            }
            await new Promise<any>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'logout',
                    sid: workflowAgent.data.sid
                }, (payload: any) => {
                    if (payload?.error) {
                        return reject(new Error(payload.error));
                    }
                    resolve(payload);
                });
            })
        }

        public async interrupt(workflowAgentSID: string) {
            await new Promise<any>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'interrupt',
                    sid: workflowAgentSID
                }, (payload: any) => {
                    resolve(payload);
                });
            })
        }
        public async clearQueue(workflowAgentSID: string) {
            await new Promise<any>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'clearQueue',
                    sid: workflowAgentSID
                }, (payload: any) => {
                    resolve(payload);
                });
            })
        }
        public async reboot(workflowAgentSID: string) {
            return await new Promise<WorkflowCalleeActions['reboot']['result']>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'reboot',
                    sid: workflowAgentSID
                }, (payload: WorkflowCalleeActions['reboot']['result']) => {
                    resolve(payload);
                });
            })
        }
    }
}

