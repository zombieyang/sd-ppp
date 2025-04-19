import { WorkflowCalleeActions } from "../../../../src/socket/WorkflowCalleeInterface.mts";
import { Socket, SocketConstructor } from "../../../../src/common/socket/Socket.mts";
import { WorkflowCallerActions } from "../../../../src/socket/WorkflowCallerInterface.mts";
import { pageStore } from "../../photoshopModels.mts";
import { api, app } from "../comfy-globals.mts";
import { blankGraph } from "../defaultGraph.mts";
import { findAvailableNodeInGraph, setWidgetValue } from "../graph-to-form.mts";
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
                    payload.action == 'reboot'
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
            const batchCount = params.size;
            const fromSID = params.from_sid
            for (let i = 0; i < batchCount; i++) {
                const p = await app.graphToPrompt()
                let firstNodeError: { nodeID: number, error: string } | null = null
                let promptId = ''

                try {
                    const res = await api.queuePrompt(0, p)
                    if (res.node_errors) {
                        console.log('node_errors', res.node_errors)
                        firstNodeError = findFirstNodeError(res.node_errors)
                    }
                    promptId = res.prompt_id

                } catch (error: any) {
                    if (error.response) {
                        firstNodeError = findFirstNodeError(error.response.node_errors)
                    } else {
                        firstNodeError = {
                            nodeID: 0,
                            error: error.stack
                        }
                    }
                }
                function findFirstNodeError(errors: any) {
                    if (Object.keys(errors).length > 0) {
                        const nodeID = Object.keys(errors)[0]
                        return {
                            nodeID: parseInt(nodeID),
                            error: errors[nodeID].errors.map(JSON.stringify).join('\n')
                        }
                    }
                    return null
                }

                if (firstNodeError) {
                    pageStore.setLastError(firstNodeError.error, firstNodeError.nodeID)
                    break
                }
                PreviewSender.set(promptId, fromSID)

                for (const n of p.workflow.nodes) {
                    const node = app.graph.getNodeById(n.id)
                    if (node.widgets) {
                        for (const widget of node.widgets) {
                            if (widget.afterQueued) {
                                widget.afterQueued()
                            }
                        }
                    }
                }
                const workflow = this.workflowManager.activeWorkflow
                workflow.changeTracker.checkState()
            }
        }
        public async list() {
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
                if (favoritesResponse.ok) {
                    const favoritesData = await favoritesResponse.json();
                    const favorites = favoritesData.favorites.map((fav: string) => fav.replace('workflows/', ''));

                    workflowPaths.sort((a: string, b: string) => {
                        const aIsFavorite = favorites.includes(a);
                        const bIsFavorite = favorites.includes(b);
                        if (aIsFavorite && !bIsFavorite) return -1;
                        if (!aIsFavorite && bIsFavorite) return 1;
                        return 0;
                    });
                }
            } catch (error) {
                console.warn('Error fetching favorites, returning unsorted workflows:', error);
            }
            return workflowPaths;
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
                if (workflow_path.startsWith('sdppp://')) {
                    this.openSDPPPWorkflow(params)
                } else {
                    this.openComfyWorkflow(params)
                }
                pageStore.setLastOpenedWorkflow(workflow_path)
            } catch (error) {
                pageStore.setLastOpenedWorkflow('')
                throw error
            }
        }
        private async openSDPPPWorkflow(params: WorkflowCalleeActions['open']['params']) {
            const from_sid = params.from_sid;
            const workflow_path = params.workflow_path.replace('sdppp://', '')

            const workflowContent = await fetch("/sd-ppp-static/sdppp-workflows/" + workflow_path).then(res => res.json())

            await app.loadGraphData(workflowContent)

            const form = findAvailableNodeInGraph(app.graph);
            pageStore.setCurrentForm(form);
            await this.socket.emit('B_workflow', {
                action: 'getStoredWidgetValue',
                sid: from_sid,
                params: {
                    nodeIndexes: form.reduce((acc: any, node: any) => {
                        node.widgets.forEach((widget: any, index: number) => {
                            acc.push({ nodeTitle: node.title, widgetIndex: index });
                        });
                        return acc;
                    }, [] as { nodeTitle: string, widgetIndex: number }[])
                }
            }, (result: WorkflowCallerActions['getStoredWidgetValue']['result']) => {
                this.setWidgetValue(result)
            })
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
            await new Promise(resolve => setTimeout(resolve, 300));

            const form = findAvailableNodeInGraph(app.graph);
            pageStore.setCurrentForm(form);
            await this.socket.emit('B_workflow', {
                action: 'getStoredWidgetValue',
                sid: from_sid,
                params: {
                    nodeIndexes: form.reduce((acc: any, node: any) => {
                        node.widgets.forEach((widget: any, index: number) => {
                            acc.push({ nodeTitle: node.title, widgetIndex: index });
                        });
                        return acc;
                    }, [] as { nodeTitle: string, widgetIndex: number }[])
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


async function queuePrompt(batchCount: number) {
}