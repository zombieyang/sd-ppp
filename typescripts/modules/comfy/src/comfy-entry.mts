import 'sdppp-test/comfy';
import { SpeicialIDManager } from '../../../src/common/photoshop/specialLayer.mjs';
import { wrapNode } from './litegraph/node-wrapper.mjs';
import { ComfySocket } from './socket/ComfySocket.mjs';
import { pageStore, waitModelInited } from '../photoshopModels.mts';
import initPopup from './popup/sdpppPopup.mjs';
import PreviewSender from './PreviewSender.mjs';
import { sdpppX } from '../../../src/common/sdpppX.mjs';
import './widgettable-entry.mjs'
import { simplifyWorkflowPath } from '../../../src/common/string-util.mts';
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
		pageStore.setExecutingNodeTitle('');
		pageStore.setLastError(detail.exception_message);
		if (detail.node_id) {
			const node = app.graph.nodes.find((item: any) => item.id == detail.node_id)
			pageStore.setWidgetTableErrors({
				[detail.node_id]: `[${node?.title || detail.node_id}]` + detail.exception_message
			});
		}
	});
	let captureNextPromptBySID: string[] = []
	api.addEventListener("execution_start", ({ detail }: { detail: { prompt_id: string } }) => {
		pageStore.setLastError('');
		pageStore.setWidgetTableErrors({});
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
	api.addEventListener("execution_success", (ev: any) => {
		pageStore.setProgress(0);
		pageStore.setExecutingNodeTitle('');
		if (PreviewSender.get(ev.detail.prompt_id)) {
			PreviewSender.delete(ev.detail.prompt_id);
		}
	});
	api.addEventListener("execution_interrupted", () => {
		pageStore.setProgress(0);
		pageStore.setExecutingNodeTitle('');
	});
	const promptsFromSDPPPBackend = new Map<string, string>();
	api.addEventListener("executed", (ev: any) => {
		if (ev.detail.output && Array.isArray(ev.detail.output.images) && ev.detail.output.images.length > 0) {
			let fromSID = null;
			if (PreviewSender.get(ev.detail.prompt_id)) {
				fromSID = PreviewSender.get(ev.detail.prompt_id);

			} else {
				// consider if it neccesary
				fromSID = location.search.match(/webview_fromsid=([^&]+)/)?.[1] || '';
			}
			if (!fromSID) return;
			if (
				!app.graph.nodes
					.filter((node: any) => node.type == 'Send Images To Photoshop')
					.filter((node: any) => { return node.mode == 0 })
					.length
			) {
				socket?.sendImage(fromSID, {
					document_identify: SpeicialIDManager.getSpecialDocumentForPreview(),
					layer_identifies: ev.detail.output.images.map(() => SpeicialIDManager.getSpecialLayerForSend()[0]),
					boundaries: ev.detail.output.images.map(() => ''),
					image_urls: ev.detail.output.images.map((image: any) => {
						return location.origin + '/api/view?type=' + image.type + '&filename=' + image.filename
					}),
					new_layer_name: simplifyWorkflowPath(pageStore.data.widgetTableStructure.widgetTablePath)
				})
			}
		}
	})

	initPopup(app);

	var socket = new ComfySocket();
	socket.connect();

	const id = "Comfy.SD-PPP"

	app.registerExtension({
		name: id,
		async setup() {
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
