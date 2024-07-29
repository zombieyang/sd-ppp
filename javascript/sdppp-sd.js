;(function () {
    if (typeof gradioApp == 'undefined') return;
    function callGlobalGradioFunction(name) {
        const button = document.getElementById(`sdppp_${name}`);
        button.click();
    }

    class SDPPP {
        constructor() {
            this.insertedPop = false;
            this.socketInited = false;

            this.currentWidget = null;
            this.socket = null;
            this.pollInterval = null;

            this.$el = null;
            this.$inputLayer = null;
            this.$inputBound = null;
            this.$inputSendLayer = null;
            this.$refreshLayer = null;
            this.$refreshBound = null;
            this.$refreshSendLayer = null;
            this.$getterSaveAndClose = null;
            this.$senderSaveAndClose = null;

            setTimeout(()=> {
                this.initSocket();
            })
        }

        initDOM() {
            this.insertedPop = true;
            this.$inputGetDocument = document
                .getElementById("sdppp_get_document")
                .getElementsByTagName("input")[0];
            this.$inputLayer = document
                .getElementById("sdppp_layers")
                .getElementsByTagName("input")[0];
            this.$inputBound = document
                .getElementById("sdppp_bounds")
                .getElementsByTagName("input")[0];
            this.$inputSendDocument = document
                .getElementById("sdppp_send_document")
                .getElementsByTagName("input")[0];
            this.$inputSendLayer = document
                .getElementById("sdppp_send_layers")
                .getElementsByTagName("input")[0];

            this.$refreshGetDocument = document
                .getElementById("refresh_sdppp_get_document");
            this.$refreshLayer = document
                .getElementById("refresh_sdppp_layers");
            this.$refreshBound = document
                .getElementById("refresh_sdppp_bounds");
            this.$refreshSendDocument = document
                .getElementById("refresh_sdppp_send_document");
            this.$refreshSendLayer = document
                .getElementById("refresh_sdppp_send_layers");

            this.$getterSaveAndClose = document
                .getElementById("sdppp_getter_dialog_close");
            this.$senderSaveAndClose = document
                .getElementById("sdppp_sender_dialog_close");

            this.$getterSaveAndClose.addEventListener("click", () => {
                this.currentWidget.documentValue = this.$inputGetDocument.value;
                this.currentWidget.layerValue = this.$inputLayer.value;
                this.currentWidget.boundValue = this.$inputBound.value;
                this.currentWidget.render();
                this.currentWidget.action();
                closePopup();
            });
            this.$senderSaveAndClose.addEventListener("click", () => {
                this.currentWidget.layerValue = this.$inputSendLayer.value;
                this.currentWidget.documentValue = this.$inputSendDocument.value;
                this.currentWidget.render();
                this.currentWidget.action();
                closePopup();
            });
        }

        async fetchDocumentData() {
            const data = await new Promise(resolve => {
                this.socket.emit('c_get_documents', resolve)
            });
            await new Promise(resolve => {
                this.socket.emit('c_set_sd_options', {
                    document_data: data,
                    special_get_layer_options: SDPPPSpeicialIDManager.getSpecialLayerForGet(),
                    special_get_bound_layer_options: SDPPPSpeicialIDManager.getSpecialLayerForGetBounds(),
                    special_send_layer_options: SDPPPSpeicialIDManager.getSpecialLayerForSend()
                }, resolve)
            })
        }
        
        async getterConfig(widget) {
            popupId("sdppp_getter_dialog")
            callGlobalGradioFunction("show_getter_dialog")
            if (!this.insertedPop) {
                this.initDOM();
            }
            this.currentWidget = widget;
            if (widget.documentValue) {
                this.$inputGetDocument.value = widget.documentValue;
            }
            if (widget.layerValue) {
                this.$inputLayer.value = widget.layerValue;
            }
            if (widget.boundValue) {
                this.$inputBound.value = widget.boundValue;
            }
            await this.fetchDocumentData();
            this.$refreshGetDocument.click();
        }
        async senderConfig(widget) {
            popupId("sdppp_sender_dialog")
            callGlobalGradioFunction("show_sender_dialog")
            if (!this.insertedPop) {
                this.initDOM();
            }
            this.currentWidget = widget;
            if (widget.documentValue) {
                this.$inputSendDocument.value = widget.documentValue;
            }
            if (widget.layerValue) {
                this.$inputSendLayer.value = widget.layerValue;
            }
            await this.fetchDocumentData();
            this.$refreshSendDocument.click();
        }

        async initSocket() {
            if (this.socketInited) return Promise.resolve();;
            this.socket = io(location.origin, {
                transports: ["websocket"],
                path: '/sd-ppp/',
                query: {
                    api_level: 407,
                    type: 'sd'
                }
            });
            this.socketInited = true;

            return new Promise((resolve, reject) => {
                this.socket.on('connect', resolve);
                this.socket.on('disconnect', () => {
                    this.socketInited = false;
                });
                this.socket.on('s_run', async () => {
                    const tab = document.getElementById('tabs').querySelector('button.selected');
                    const activeTabIndex = Array.prototype.indexOf.call(tab.parentElement.children, tab)
                    
                    for (let getWidgetRef of insertedGetWidgets) {
                        const widget = getWidgetRef.deref();
                        if (widget && widget.isReady()) {
                            await widget.action()
                        }
                    }
                        
                    let skipButton = null;
                    if (activeTabIndex == 0) {
                        document.getElementById('txt2img_generate').click();
                        skipButton = document.getElementById('txt2img_skip')
                    }
                    if (activeTabIndex == 1) {
                        document.getElementById('img2img_generate').click();
                        skipButton = document.getElementById('img2img_skip')
                    }
                    if (activeTabIndex == 2) {
                        document.getElementById('extras_generate').click();
                        skipButton = document.getElementById('extras_skip')
                    }

                    await new Promise(resolve => {
                        const interval = setInterval(checkProgress, 500)
                        function checkProgress() {
                            if (skipButton.style.display == 'none') {
                                clearInterval(interval)
                                resolve()
                            }
                        }
                    })

                    for (let sendWidgetRef of insertedSendWidgets) {
                        const widget = sendWidgetRef.deref();
                        if (widget.isReady()) {
                            widget.action()
                        }
                    }
                });
				this.socket.emit('c_reset_instance_name', {
					name: document.title
				})
                setInterval(() => {
                    this.socket.emit('c_reset_instance_name', {
                        name: document.title
                    })
                }, 1000)
            });
        }
        
        async getImage(data) {
            await this.initSocket();

            return new Promise((resolve, reject) => {
                this.socket.emit('c_get_image', data, (data) => {
                    data && data.error ? reject(new Error(data.error)) : resolve(data);
                });
            });
        }
        
        async sendImage(data) {
            await this.initSocket();

            return new Promise((resolve, reject) => {
                this.socket.emit('c_send_image', data, (data) => {
                    data && data.error ? reject(new Error(data.error)) : resolve(data);
                });
            });
        }

        static instance = new SDPPP();
    }

    class SDPPPWidget {
        constructor() {
            const $widget = document.createElement("div");
            this.$el = $widget;

            const $settingButton = document.createElement("button");
            this.$settingButton = $settingButton;
            $widget.appendChild($settingButton);

            $settingButton
                .addEventListener('click', () => {
                    this.openConfig();
                });
        }

        openConfig() {
            throw new Error('not implemented');
        }

        render() {
            this.$settingButton.className = "sdppp-setting-button";
            this.$settingButton.textContent = "🔧";
            this.$settingButton.style.display = 'none';
        }
    }

    class GetterWidget extends SDPPPWidget {
        isReady() {
            return this.layerValue && this.boundValue && this.documentValue;
        }

        openConfig() {
            SDPPP.instance.getterConfig(this);
        }

        constructor($gradioImage) {
            super();
            const $getButton = document.createElement("button");
            this.$getButton = $getButton;
            this.$gradioImage = $gradioImage;
            this.$el.appendChild($getButton);

            $getButton
                .addEventListener('click', async () => {
                    if (!this.isReady()) 
                        this.openConfig();
                    else {
                        this.action();
                    }
                });

            this.layerValue = '';
            this.boundValue = '';
            this.documentValue = '';

            this.render();
        }

        render() {
            super.render();
            this.$el.className = "sdppp-get-widget";
            this.$getButton.className = "sdppp-get-button";
            if (this.isReady()) {
                this.$settingButton.style.display = 'flex';
                this.$getButton.textContent = "SDPPP get";

            } else {
                this.$settingButton.style.display = 'none';
                this.$getButton.textContent = "SDPPP init";
            
            }
        }

        async action() {
            await SDPPP.instance.getImage({
                'document': this.documentValue,
                'layer': this.layerValue, 
                'use_layer_bounds': this.boundValue,
                'sd': {
                    elem_id: this.$gradioImage.id
                }
            })

            callGlobalGradioFunction('get_image_' + this.$gradioImage.id)
        }
    }

    class SenderWidget extends SDPPPWidget{
        isReady() {
            return this.layerValue && this.documentValue
        }

        openConfig() {
            SDPPP.instance.senderConfig(this);
        }

        constructor($gradioGallery) {
            super();
            const $sendButton = document.createElement("button");
            this.$sendButton = $sendButton;
            this.$gradioGallery = $gradioGallery;
            this.$el.appendChild($sendButton);

            $sendButton
                .addEventListener('click', () => {
                    if (!this.isReady()) 
                        this.openConfig();
                    else 
                        this.action();
                });

            this.layerValue = '';
            this.documentValue = '';

            this.render();
        }

        render() {
            super.render();
            this.$el.className = "sdppp-send-widget";
            this.$sendButton.className = "sdppp-send-button";

            if (this.isReady()) {
                this.$settingButton.style.display = 'flex';
                this.$sendButton.textContent = "SDPPP send";

            } else {
                this.$settingButton.style.display = 'none';
                this.$sendButton.textContent = "SDPPP init";
            
            }
        }

        async action() {
            let selections = [...this.$gradioGallery.querySelector('.grid-wrap').querySelectorAll('button')];
            const selectionsWithSelected = selections
                .filter((button) => button.classList.contains('selected'));
            selections = selectionsWithSelected.length ? selectionsWithSelected : selections;
            const selected_image = selections
                .map((button) => {
                    return button.querySelector('img').src
                });
            await SDPPP.instance.sendImage({
                'document': this.documentValue,
                'layer': this.layerValue, 
                'sd': {
                    image_urls: selected_image
                }
            })
        }

    }

    const insertedGetWidgetsByElem = new WeakMap();
    const insertedSendWidgetsByElem = new WeakMap();
    const insertedGetWidgets = new Set();
    const insertedSendWidgets = new Set();

    onUiUpdate(() => {
        gradioApp().querySelectorAll(".gradio-image").forEach((el) => {
            if (insertedGetWidgetsByElem.has(el)) return;
            const widget = new GetterWidget(el);
            el.appendChild(widget.$el);
            insertedGetWidgetsByElem.set(el, widget);
            insertedGetWidgets.add(new WeakRef(widget))
        })
        gradioApp().querySelectorAll(".gradio-gallery").forEach((el) => {
            if (insertedSendWidgetsByElem.has(el)) return;
            const widget = new SenderWidget(el);
            el.appendChild(widget.$el);
            insertedSendWidgetsByElem.set(el, widget);
            insertedSendWidgets.add(new WeakRef(widget))
        })
    })
})();
