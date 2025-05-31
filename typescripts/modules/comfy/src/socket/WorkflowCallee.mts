import { WorkflowCalleeActions } from "../../../../src/socket/WorkflowCalleeInterface.mts";
import { Socket, SocketConstructor } from "../../../../src/common/socket/Socket.mts";
import { WorkflowCallerActions } from "../../../../src/socket/WorkflowCallerInterface.mts";
import { pageStore } from "../../photoshopModels.mts";
import { api, app } from "../comfy-globals.mts";
import { blankGraph } from "../defaultGraph.mts";
import { makeWidgetTableStructure, setWidgetValue } from "../graph-to-form.mts";
import PreviewSender from "../PreviewSender.mts";
import i18n from "../../../../src/common/i18n.mts";

interface WorkflowCalleePayload {
    action: keyof WorkflowCalleeActions,
    sid: string,
    params: WorkflowCalleeActions[keyof WorkflowCalleeActions]['params']
}

export function WorkflowCalleeSocket(SocketClass: SocketConstructor<Socket>) {

    return class extends SocketClass {
        private workflowManager: any

        constructor(url: string) {
            super(url);
            this.workflowManager = app.workflowManager || app.extensionManager.workflow

            this.socket.on('F_workflow', async (payload: WorkflowCalleePayload, callback: any) => {
                if (
                    payload.action == 'open' ||
                    payload.action == 'save' ||
                    payload.action == 'list' ||
                    payload.action == 'setWidgetValue' ||
                    payload.action == 'run' ||
                    payload.action == 'setNodeTitle' ||
                    payload.action == 'logout' ||
                    payload.action == 'interrupt' ||
                    payload.action == 'clearQueue' ||
                    payload.action == 'reboot' ||
                    payload.action == 'setComfyOrgAPIKey'
                ) {
                    try {
                        // @ts-expect-error 
                        const res = await this[payload.action](payload.params) as any
                        callback(res || {})
                    } catch (e: any) {
                        callback({
                            error: e.stack || e.message || e
                        })
                    }
                } else {
                    callback({
                        error: 'Invalid action'
                    })
                }
            });
        }
        private async logout() {
            this.socket.disconnect();
            // @ts-ignore
            document.querySelector('.pi-sign-out').parentElement.click()
        }

        private async run(params: WorkflowCalleeActions['run']['params']) {
            if (!hijackedQueuePrompt) {
                hijackQueuePrompt()
            }

            const batchCount = params.size;

            let hasAnyError = false
            let generalError = ''
            let nodeErrors: Record<string, string> = {}
            try {
                queuePromptRecords = [];
                const success = await app.queuePrompt(1, batchCount)
                queuePromptRecords.forEach((res) => {
                    if (hasAnyError) return;
                    if (res.error) {
                        hasAnyError = true
                        nodeErrors = formatNodeErrors(res.error.response.node_errors)
                        Object.assign(nodeErrors, {
                            '-1': res.error.response.error.message
                        })
                    } else {
                        const promptId = res.result.prompt_id
                        PreviewSender.set(promptId, params.from_sid)
                    }
                })
                // if (!success) {
                //     hasAnyError = true
                //     nodeErrors = formatNodeErrors(app.lastNodeErrors)
                // }

            } catch (error: any) {
                hasAnyError = true
                nodeErrors = {
                    '-1': error.message || error.stack || error.toString()
                }
            }

            if (hasAnyError) {
                if (generalError) {
                    pageStore.setLastError(generalError)
                } else {
                    pageStore.setWidgetTableErrors(nodeErrors)
                }
            }
            function formatNodeErrors(errors: any) {
                const ret: Record<string, string> = {};
                Object.keys(errors).forEach((nodeID) => {
                    const id = nodeID.split(":")[0]
                    const node = app.graph.nodes.find((item: any) => item.id == id)
                    ret[id] = `[${node?.title || id}]` + errors[nodeID].errors.map(JSON.stringify).join('\n')
                })
                return ret
            }
        }
        public async list(params: WorkflowCalleeActions['list']['params']): Promise<WorkflowCalleeActions['list']['result']> {
            const workflows = this.workflowManager.workflows
            let workflowPaths = workflows.map((w: any) => w.path.replace('workflows/', ''));

            try {
                const headers = new Headers();
                const usertokens = localStorage.getItem('Comfy.userId')
                usertokens && headers.set('comfy-user', usertokens);
                // Attempt to fetch and apply favorites
                const favoritesResponse = await fetch(
                    './api/userdata/workflows%2F.index.json', {
                    headers
                });
                let favorites: string[] = [];
                if (favoritesResponse.ok) {
                    const favoritesData = await favoritesResponse.json();
                    favorites = favoritesData.favorites.map((fav: string) => fav.replace('workflows/', ''));
                }
                workflowPaths.sort((a: string, b: string) => {
                    const aIsFavorite = favorites.includes(a);
                    const bIsFavorite = favorites.includes(b);
                    if (aIsFavorite && !bIsFavorite) return -1;
                    if (!aIsFavorite && bIsFavorite) return 1;
                    return a.localeCompare(b);
                });
            } catch (error) {
                console.warn('Error fetching favorites, returning unsorted workflows:', error);
            }
            return {
                workflows: workflowPaths,
                error: ''
            };
        }
        private setWidgetValue(params: WorkflowCalleeActions['setWidgetValue']['params']) {
            params.values.forEach(({ nodeID, widgetIndex, value }) => {
                const node = app.graph.nodes.find((n: any) => n.id == nodeID);
                if (!node || value == node.widgets[widgetIndex].value) return;
                setWidgetValue(node, widgetIndex, value)
            });
        }
        private async open(params: WorkflowCalleeActions['open']['params']) {
            const { workflow_path } = params;
            try {
                pageStore.setLastError('');
                pageStore.setWidgetTableErrors({});
                if (workflow_path.startsWith('sdppp://')) {
                    await this.openSDPPPWorkflow(params)
                } else {
                    await this.openComfyWorkflow(params)
                }
            } catch (error) {
                throw error
            }
        }
        private async openSDPPPWorkflow(params: WorkflowCalleeActions['open']['params']) {
            const workflow_path = params.workflow_path.replace('sdppp://', '')

            const workflowContent = await fetch("/sd-ppp-static/sdppp-workflows/" + workflow_path).then(res => res.json())

            workflowContent.extra['sdppp_workflow_alias'] = params.workflow_path

            await app.loadGraphData(workflowContent)

            // temp workflow may not have any store
        }
        private async openComfyWorkflow(params: WorkflowCalleeActions['open']['params']) {
            const { workflow_path, from_sid, reset } = params;
            const workflow = this.workflowManager.workflows.find((w: any) =>
                w.fullFilename === workflow_path ||
                w.path === workflow_path ||
                w.path === 'workflows/' + workflow_path
            )
            if ((workflow.isOpen || this.workflowManager.isOpen?.(workflow)) && !reset) return;

            if (this.workflowManager.openWorkflows.length === 1) await app.loadGraphData(blankGraph)
            else await openWorkflow(this.workflowManager,
                this.workflowManager.openWorkflows[0] == workflow ?
                    this.workflowManager.openWorkflows[1] :
                    this.workflowManager.openWorkflows[0]
            );

            await this.workflowManager.closeWorkflow(workflow, false)
            await new Promise(resolve => requestAnimationFrame(resolve));
            await openWorkflow(this.workflowManager, workflow);

            // wait for some third party nodes to update
            await new Promise(resolve => setTimeout(resolve, 500));

            if (!pageStore.data.widgetTableStructure) { return; }

            await this.socket.emit('B_workflow', {
                action: 'getStoredWidgetValue',
                sid: from_sid,
                params: {
                    widgetTableID: pageStore.data.widgetTableStructure.widgetTableID,
                    widgetTablePath: pageStore.data.widgetTableStructure.widgetTablePath,
                    widgetTablePersisted: pageStore.data.widgetTableStructure.widgetTablePersisted,
                }
            }, (result: WorkflowCallerActions['getStoredWidgetValue']['result']) => {
                this.setWidgetValue(result)
            })
        }
        private async save(params: WorkflowCalleeActions['save']['params']) {
            const { workflow_path, from_sid } = params;
            const workflow = this.workflowManager.workflows.find((w: any) =>
                w.fullFilename === workflow_path ||
                w.path === workflow_path ||
                w.path === 'workflows/' + workflow_path
            )
            if (!workflow) throw new Error('Workflow not found');
            if (this.workflowManager.activeWorkflow?.id != workflow.id) {
                this.open({ workflow_path, from_sid, reset: false })
            }
            workflow.changeTracker.checkState()
            await this.workflowManager.saveWorkflow(workflow);
        }
        public setNodeTitle(params: WorkflowCalleeActions['setNodeTitle']['params']) {
            const { node_id, title } = params;
            const node = app.graph.nodes.find((n: any) => n.id == node_id);
            if (!node) throw new Error('Node not found');
            node.title = title;
            node.setProperty('sdppp_widgetable_title', title);
        }
        public async interrupt(params: WorkflowCalleeActions['interrupt']['params']) {
            await app.api.interrupt();
        }
        public async clearQueue(params: WorkflowCalleeActions['clearQueue']['params']) {
            await app.api.clearItems('queue')

        }
        public async reboot(params: WorkflowCalleeActions['reboot']['params']) {
            const response = await fetch('./api/manager/reboot')
            if (response.status == 404) {
                return {
                    error: i18n('ComfyManager not found, cannot reboot'),
                    success: false
                }
            } else if (response.status == 200) {
                return {
                    success: true
                }
            } else {
                return {
                    error: i18n('Failed to reboot ComfyUI') + response.statusText,
                    success: false
                }
            }
        }

        public async setComfyOrgAPIKey(params: WorkflowCalleeActions['setComfyOrgAPIKey']['params']) {
            const { api_key } = params;
            localStorage.setItem('comfy_api_key', api_key);
            location.reload();
        }
    }
}




async function openWorkflow(workflowManager: any, workflow: any) {
    if (app.workflowManager == workflowManager) {
        await workflow.load();

    } else {
        await workflowManager.openWorkflow(workflow);
        await app.loadGraphData(
            JSON.parse(JSON.stringify(workflow.activeState)),
        /* clean=*/ true,
        /* restore_view=*/ true,
            workflow,
            {
            }
        )
    }
}
let hijackedQueuePrompt = false
let queuePromptRecords: { error: any, result: any }[] = [];
function hijackQueuePrompt() {
    if (hijackedQueuePrompt) return;
    const originalQueuePrompt = api.queuePrompt;
    api.queuePrompt = async (...args: any[]) => {
        try {
            const res = await originalQueuePrompt.call(api, ...args)
            queuePromptRecords.push({
                error: null,
                result: res
            })
            return res
        } catch (error) {
            queuePromptRecords.push({
                error: error,
                result: null
            })
            throw error
        }
    }
    hijackedQueuePrompt = true
}