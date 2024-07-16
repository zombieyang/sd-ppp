
(async function() {
	if (typeof gradioApp != 'undefined') return;
	const { app } = await import("../../../scripts/app.js")
	const { api } = await import("../../../scripts/api.js")
	await import('./socket.io.js') 
	const socketio = globalThis.io

	let layerStrs = [];
	let boundsStrs = [];
	let setLayerStrs = [];
	let socket = null;
	
	console.log("[sd-ppp]", "Loading js extension");
	app.registerExtension({
		name: "Comfy.SD-PPP",
		init() {
		},
		async setup() {
	
			socket = socketio(location.origin, {
				transports: ["websocket"],
				path: '/sd-ppp/',
				query: {
					api_level: 2,
					type: 'comfyui'
				}
			});
	
			socket.on('connect', () => {
				socket.emit('c_reset_changes');
				socket.emit('c_reset_instance_name', {
					name: document.title
				})
			});
			socket.on('disconnect', () => {
			});
			socket.on('connect_error', () => {
				console.error('sdppp socket connect_error')
			});
			socket.on('s_run', () => {
				document.getElementById('queue-button').click()
			});
			socket.on('s_trigger_graph_change', () => {
				api.dispatchEvent(new CustomEvent("graphChanged"));
			});
			setInterval(() => {
				checkHistoryChanges();
				socket.emit('c_get_layers', (data) => {
					layerStrs = data.layer_strs;
					boundsStrs = data.bound_strs;
					setLayerStrs = data.set_layer_strs;
				})
				socket.emit('c_reset_instance_name', {
					name: document.title
				})
			}, 2000);
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
			} else if (nodeType.comfyClass === 'Send Images To Photoshop') {
				const onSelected = nodeType.prototype.onSelected;
				const onMouseEnter = nodeType.prototype.onMouseEnter;
				let this_handler = function() {
					this.widgets[0].options.values = setLayerStrs;
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
	]
	
	async function checkHistoryChanges() {
		try {
			const currentState = app.graph.serialize();
			const mode0NodeTypes = currentState.nodes.filter(node => node.mode == 0).map(node => node.type);
			const containsSDPPPNodes = mode0NodeTypes.some(nodeType => SDPPPNodes.includes(nodeType));
			if (!containsSDPPPNodes) return;
			socket.emit('c_check_changes')
		} catch (e) {
			console.error("[sd-ppp]", "Failed to check changes", e);
		}
	}
})();
