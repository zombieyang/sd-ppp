import { Socket, SocketConstructor } from "../common/socket/Socket.mts";
import { WorkflowCalleeActions } from "./WorkflowCalleeInterface.mjs";
import { PageStore } from "../store/page.mts";
import { WorkflowCaller, WorkflowCallerActions } from './WorkflowCallerInterface.mjs'

export function WorkflowCallerSocket(SocketClass: SocketConstructor<Socket>) {

    return class extends SocketClass implements WorkflowCaller {

        constructor(url: string) {
            super(url);
            this.socket.on('B_workflow', (payload: {
                action: string,
                params: WorkflowCallerActions['getStoredWidgetValue']['params']
            }, callback: (payload: WorkflowCallerActions['getStoredWidgetValue']['result']) => void) => {
                if (payload.action == 'getStoredWidgetValue') {
                    const { widgetTableID, widgetTablePath, widgetTablePersisted } = payload.params;
                    const widgetTableKey = `${widgetTableID}_${widgetTablePath}_${widgetTablePersisted}`;
                    const data = getStoredWidgetValue(widgetTableKey);
                    const values: {
                        nodeID: number,
                        widgetIndex: number,
                        value: any,
                        outputType: string
                    }[] = []
                    if (data) {
                        Object.keys(data || {}).forEach((nodeID: any) => {
                            Object.keys(data[nodeID] || {}).forEach((widgetIndex: any) => {
                                values.push({
                                    nodeID: nodeID,
                                    widgetIndex: widgetIndex,
                                    value: data[nodeID][widgetIndex].value,
                                    outputType: data[nodeID][widgetIndex].outputType
                                })
                            })
                        })
                    }
                    callback({ values })
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

        public async listWorkflows(workflowAgent: PageStore | null, params: WorkflowCalleeActions['list']['params']) {
            if (!workflowAgent) {
                return {
                    workflows: [],
                    error: 'Workflow agent not found'
                };
            }
            return await new Promise<WorkflowCalleeActions['list']['result']>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'list',
                    sid: workflowAgent.data.sid,
                    params
                }, (payload: WorkflowCalleeActions['list']['result']) => {
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
        public async setComfyOrgAPIKey(workflowAgentSID: string, api_key: string) {
            return await new Promise<void>((resolve, reject) => {
                this.socket.emit('F_workflow', {
                    action: 'setComfyOrgAPIKey',
                    sid: workflowAgentSID,
                    params: { api_key } 
                }, (payload: any) => {
                    resolve(payload);
                });
            })
        }
        
    }
}




function getStoredWidgetValue(widgetTableKey: string): {
    [nodeID: number]: {
        value: any,
        outputType: string
    }[]
} | null {
    const storedValue = localStorage.getItem(`widgetValue_${widgetTableKey}`)
    if (!storedValue) return null;
    const dataObj = JSON.parse(storedValue);
    return dataObj
}