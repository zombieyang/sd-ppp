(async function () {
	if (typeof gradioApp != 'undefined') return;
	const { app } = await import("../../../scripts/app.js")
	const { api } = await import("../../../scripts/api.js")
	const { $el } = await import('../../../scripts/ui.js')
	await import('./socket.io.js')
	await import('./sdppp-util.js')
	const socketio = globalThis.io

	let documentData = null;
	let socket = socketio(location.origin, {
		transports: ["websocket"],
		path: '/sd-ppp/',
		query: {
			api_level: 407,
			type: 'comfyui'
		}
	});
	api.addEventListener("progress", ({ detail }) => {
		if (!detail || isNaN(detail.value / detail.max)) return;
		socket.emit('c_progress', {
			progress: Math.round(detail.value / detail.max * 100)
		});
	});

	console.log("[sd-ppp]", "Loading js extension");
	const id = "Comfy.SD-PPP"
	app.ui.settings.addSetting({
		id,
		name: "Download SD-PPP plugin",
		type: (name, setter, value) => {
			return $el("tr", [
				$el("td", [
					$el("label", {
						for: id.replaceAll(".", "-"),
						textContent: "Download SD-PPP plugin",
					}),
				]),
				$el("td", [
					$el("input", {
						type: "button",
						value: "Photoshop .ccx",
						onclick: async () => {
							location.href = "/extensions/sd-ppp/plugins/sd-ppp_PS.ccx"
						},
					})
				])
			])
		}
	})
	app.registerExtension({
		name: id,
		init() {
		},
		async setup() {
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
				// socket.emit('c_get_layers', (data) => {
				// 	layerStrs = data.layer_strs;
				// 	boundsStrs = data.bound_strs;
				// 	setLayerStrs = data.set_layer_strs;
				// })
				socket.emit('c_reset_instance_name', {
					name: document.title
				})
			}, 2000);
		},
		async beforeRegisterNodeDef(nodeType, nodeData, app) {
			if (nodeType.comfyClass === 'Get Image From Photoshop Layer') {
				const onSelected = nodeType.prototype.onSelected;
				const onMouseEnter = nodeType.prototype.onMouseEnter;
				const onAdded = nodeType.prototype.onAdded;
				const resetWidget12 = function () {
					const documentName = this.widgets[0].value
					this.widgets[1].options.values = !documentData[documentName] ? [] : SDPPPSpeicialIDManager.getSpecialLayerForGet().concat(documentData[documentName].layers.map(layer => layer.name));
					this.widgets[2].options.values = !documentData[documentName] ? [] : SDPPPSpeicialIDManager.getSpecialLayerForGetBounds().concat(documentData[documentName].layers.map(layer => layer.name));
					if (!this.widgets[1].value || this.widgets[1].options.values.indexOf(this.widgets[1].value) == -1) this.widgets[1].value = this.widgets[1].options.values[0]
					if (!this.widgets[2].value || this.widgets[2].options.values.indexOf(this.widgets[2].value) == -1) this.widgets[2].value = this.widgets[2].options.values[0]
				}
				const getAndRender = async function () {
					documentData = (await new Promise(resolve => {
						socket.emit('c_get_documents', resolve)
					})) || {}
					this.widgets[0].options.values = Object.keys(documentData);
					if (!this.widgets[0].options.values.length) this.widgets[0].value = ''
					if (!this.widgets[0].value || this.widgets[0].options.values.indexOf(this.widgets[0].value) == -1) this.widgets[0].value = this.widgets[0].options.values[0];
					resetWidget12.call(this);
				}
				nodeType.prototype.onSelected = async function (...args) {
					if (onSelected) await onSelected.call(this, ...args);
					await getAndRender.call(this);
				}
				nodeType.prototype.onMouseEnter = async function (...args) {
					if (onMouseEnter) await onMouseEnter.call(this, ...args);
					await getAndRender.call(this);
				}
				nodeType.prototype.onAdded = async function () {
					if (onAdded) await onAdded.call(this, ...args);
					this.widgets[0].callback = () => {
						resetWidget12.call(this);
					}
					this.widgets[1].callback = () => {
						if (this.widgets[0].value == SDPPPSpeicialIDManager.SPECIAL_DOCUMENT_CURRENT) {
							Object.keys(documentData).forEach(documentKey => {
								if (documentKey == SDPPPSpeicialIDManager.SPECIAL_DOCUMENT_CURRENT) return;
								if (documentData[documentKey].layers.find(layer => layer.name == this.widgets[1].value)) {
									this.widgets[0].value = documentKey;
								}
							})
						}		
					}
				}

			} else if (nodeType.comfyClass === 'Send Images To Photoshop') {
				const onSelected = nodeType.prototype.onSelected;
				const onMouseEnter = nodeType.prototype.onMouseEnter;
				const onAdded = nodeType.prototype.onAdded;
				const resetWidget1 = function () {
					const documentName = this.widgets[0].value
					this.widgets[1].options.values = !documentData[documentName] ? [] : SDPPPSpeicialIDManager.getSpecialLayerForSend().concat(documentData[documentName].layers.map(layer => layer.name));
					if (!this.widgets[1].value || this.widgets[1].options.values.indexOf(this.widgets[1].value) == -1) this.widgets[1].value = this.widgets[1].options.values[0]
				}
				const getAndRender = async function () {
					documentData = (await new Promise(resolve => {
						socket.emit('c_get_documents', resolve)
					})) || {}
					this.widgets[0].options.values = Object.keys(documentData);
					if (!this.widgets[0].options.values.length) this.widgets[0].value = ''
					if (!this.widgets[0].value || this.widgets[0].options.values.indexOf(this.widgets[0].value) == -1) this.widgets[0].value = this.widgets[0].options.values[0];
					resetWidget1.call(this);
				}
				nodeType.prototype.onSelected = async function (...args) {
					if (onSelected) await onSelected.call(this, ...args);
					await getAndRender.call(this);
				}
				nodeType.prototype.onMouseEnter = async function (...args) {
					if (onMouseEnter) await onMouseEnter.call(this, ...args);
					await getAndRender.call(this);
				}
				nodeType.prototype.onAdded = async function () {
					if (onAdded) await onAdded.call(this, ...args);
					this.widgets[0].callback = () => {
						resetWidget1.call(this);
					}
					this.widgets[1].callback = () => {
						if (this.widgets[0].value == SDPPPSpeicialIDManager.SPECIAL_DOCUMENT_CURRENT) {
							Object.keys(documentData).forEach(documentKey => {
								if (documentKey == SDPPPSpeicialIDManager.SPECIAL_DOCUMENT_CURRENT) return;
								if (documentData[documentKey].layers.find(layer => layer.name == this.widgets[1].value)) {
									this.widgets[0].value = documentKey;
								}
							})
						}						
					}
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
