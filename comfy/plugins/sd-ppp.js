import { app } from "../../scripts/app.js";
import { api } from "../../scripts/api.js"

console.log("[sd-ppp]", "Loading js extension");
app.registerExtension({
	name: "Comfy.SD-PPP",
	init() {
	},
	async setup() {
		await api.fetchApi(`/sd-ppp/resetchanges`);
		setInterval(checkChanges, 1000);
	},
});

const SDPPPNodes = [
	'Get Image From Photoshop Layer',
    'Send Images To Photoshop',
    'Send Images To Photoshop Set Layer',
]
async function checkChanges() {
    const currentState = app.graph.serialize();
	const mode0NodeTypes = currentState.nodes.filter(node => node.mode == 0).map(node => node.type);
	const containsSDPPPNodes = mode0NodeTypes.some(nodeType => SDPPPNodes.includes(nodeType));
	if (!containsSDPPPNodes) return;
	const res = await api.fetchApi(`/sd-ppp/checkchanges`);
	const json = await res.json()
	if (!json.is_changed) return;
	api.dispatchEvent(new CustomEvent("graphChanged"));
}