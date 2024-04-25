import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js"

let layerStrs = [];
let boundsStrs = [];

console.log("[sd-ppp]", "Loading js extension");
app.registerExtension({
	name: "Comfy.SD-PPP",
	init() {
	},
	async setup() {
		await api.fetchApi(`/sd-ppp/resetchanges`);
		setInterval(checkChanges, 1000);
	},
	async beforeRegisterNodeDef(nodeType, nodeData, app) {
		if (nodeType.comfyClass === 'Get Image From Photoshop Layer') {
			const onSelected = nodeType.prototype.onSelected;
			const onMouseEnter = nodeType.prototype.onMouseEnter;
			let this_handler = function() {
				this.widgets[0].options.values = layerStrs;
				this.widgets[1].options.values = boundsStrs;
			}
			nodeType.prototype.onSelected = async function(...args) {
				if(onSelected) await onSelected.call(this, ...args);
				this_handler.call(this);
			}
			nodeType.prototype.onMouseEnter = async function(...args) {
				if(onMouseEnter) await onMouseEnter.call(this, ...args);
				this_handler.call(this);
			}
		}
	}
});

const SDPPPNodes = [
	'Get Image From Photoshop Layer',
    'Send Images To Photoshop',
    'Send Images To Photoshop Set Layer',
]
async function checkChanges() {
	await checkHistoryChanges();
	await refreshLayers();
}

async function refreshLayers() {
	try {
		const res = await api.fetchApi(`/sd-ppp/getlayers`);
		const json = await res.json()
		layerStrs = json.layer_strs;
		boundsStrs = json.bounds_strs;
	} catch (e) {
		console.error("[sd-ppp]", "Failed to get layers", e);
	}
}

async function checkHistoryChanges() {
	try {
		const currentState = app.graph.serialize();
		const mode0NodeTypes = currentState.nodes.filter(node => node.mode == 0).map(node => node.type);
		const containsSDPPPNodes = mode0NodeTypes.some(nodeType => SDPPPNodes.includes(nodeType));
		if (!containsSDPPPNodes) return;
		const res = await api.fetchApi(`/sd-ppp/checkchanges`);
		const json = await res.json()
		if (!json.is_changed) return;
		api.dispatchEvent(new CustomEvent("graphChanged"));	
	} catch (e) {
		console.error("[sd-ppp]", "Failed to check changes", e);
	}
}