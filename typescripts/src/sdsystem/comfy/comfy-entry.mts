// import 'sdppp-test/comfy';
import { SpeicialIDManager } from '../../common/photoshop/specialLayer.mjs';
import { wrapNode } from './litegraph/node-wrapper.mjs';
import { findAvailableNodeInGraph } from './graph-to-form.mjs';
import { ComfySocket } from './socket/ComfySocket.mjs';
import { pageStore, waitModelInited } from '../common/models/photoshopModels.mjs';
import initPopup from './popup/sdpppPopup.mjs';
import PreviewSender from './PreviewSender.mjs';
import { sdpppX } from '../../common/sdpppX.mjs';

declare const graph: any;

async function _init(app: any, api: any, $el: any) {
	api.addEventListener("progress", ({ detail }: { detail: { value: number, max: number } }) => {
		if (!detail || isNaN(detail.value / detail.max)) return;
		const progress = Math.round((detail.value / detail.max) * 100);
		pageStore.setProgress(progress);
	});
	api.addEventListener("status", (e: any) => {
		if (!e.detail?.exec_info) return;
		pageStore.setQueueSize(e.detail.exec_info.queue_remaining);
	});
	api.addEventListener("execution_error", ({ detail }: { detail: { node_id: number, exception_message: string } }) => {
		pageStore.setLastError(detail.exception_message, detail.node_id);
		pageStore.setExecutingNodeTitle('');
	});
	let captureNextPromptBySID: string[] = []
	api.addEventListener("execution_start", ({ detail }: { detail: { prompt_id: string } }) => {
		pageStore.setLastError('', 0);
		pageStore.setProgress(0);
		pageStore.setExecutingNodeTitle('');
		if (captureNextPromptBySID.length) {
			const bySID = captureNextPromptBySID.shift();
			bySID && promptsFromSDPPPBackend.set(detail.prompt_id, bySID);
		}
	});
	api.addEventListener("executing", (e: any) => {
		const executingNodeID = e.detail
		const node = graph.nodes.find((n: any) => n.id == executingNodeID)
		if (node)
			pageStore.setExecutingNodeTitle(node.title);
	})
	api.addEventListener("execution_success", () => {
		pageStore.setProgress(0);
		pageStore.setExecutingNodeTitle('');
	});
	api.addEventListener("execution_interrupted", () => {
		pageStore.setProgress(0);
		pageStore.setExecutingNodeTitle('');
	});
	api.addEventListener("graphChanged", () => {
		pageStore.setCurrentForm(findAvailableNodeInGraph(app.graph));
	})
	const promptsFromSDPPPBackend = new Map<string, string>();
	api.addEventListener("executed", (ev: any) => {
		if (ev.detail.output) {
			let fromSID = null;
			if (PreviewSender.get(ev.detail.prompt_id)) {
				fromSID = PreviewSender.get(ev.detail.prompt_id);
				PreviewSender.delete(ev.detail.prompt_id);

			} else {
				// consider if it neccesary
				fromSID = location.search.match(/webview_fromsid=([^&]+)/)?.[1] || '';
			}
			if (!fromSID) return;
			if (
				!app.graph.nodes.find((node: any) => node.type == 'Send Images To Photoshop')
			) {
				socket?.sendImage(fromSID, {
					document_identify: SpeicialIDManager.getSpecialDocumentForPreview(),
					layer_identifies: ev.detail.output.images.map(() => SpeicialIDManager.getSpecialLayerForSend()[0]),
					boundaries: ev.detail.output.images.map(() => ''),
					image_urls: ev.detail.output.images.map((image: any) => {
						return location.origin + '/api/view?type=temp&filename=' + image.filename
					}),
				})
			}
		}
	})

	let lastWorkflowPath = ''
	function checkGraphUpdate() {
		requestAnimationFrame(checkGraphUpdate)
		const workflowManager = app.workflowManager || app.extensionManager.workflow
		const currentWorkflowPath = workflowManager.activeWorkflow?.path
		if (currentWorkflowPath === lastWorkflowPath) return;

		lastWorkflowPath = currentWorkflowPath
		const form = findAvailableNodeInGraph(app.graph);
		pageStore.setCurrentForm(form);
		const serializedForm = JSON.stringify(form);
		setInterval(() => {
			const nowForm = findAvailableNodeInGraph(app.graph);
			if (JSON.stringify(nowForm) !== serializedForm) {
				pageStore.setCurrentForm(nowForm);
			}
		}, 800)
	}
	requestAnimationFrame(checkGraphUpdate)

	initPopup(app);

	var socket = new ComfySocket();
	socket.connect();

	const id = "Comfy.SD-PPP"

	app.registerExtension({
		name: id,
		async setup() {
			pageStore.setCurrentForm(findAvailableNodeInGraph(app.graph));
		},
		async beforeRegisterNodeDef(nodeType: any, nodeData: any, app: any) {
			try {
				wrapNode(nodeType, nodeData);
			} catch (e: any) {
				initErrors.push(e.stack || e.message || e);
			}
		}
	});
}

let initErrors: string[] = [];
; (async function () {
	// @ts-ignore
	if (typeof gradioApp != 'undefined') return;

	try {
		const app = (window as any).comfyAPI?.app?.app;
		const $el = (window as any).comfyAPI?.ui?.$el;
		const api = (window as any).comfyAPI?.api?.api;
		if (!app || !api || !$el) throw new Error('comfyAPI is not initialized, maybe comfyUI is too old');
		await waitModelInited();
		await _init(app, api, $el);

		// @ts-ignore
		import('./sdppp-custom.js').then((module) => {
			// @ts-ignore
			module.default(sdpppX)
		})

	} catch (e: any) {
		initErrors.push(e.stack || e.message || e);
	}

	await new Promise((resolve) => setTimeout(resolve, 2000));
	if (initErrors.length) {
		console.error(initErrors[0]);
		alert('sd-ppp init failed: \n' + initErrors.join('\n'));
	}
})();  
