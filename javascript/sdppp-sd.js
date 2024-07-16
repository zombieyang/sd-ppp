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
            this.$inputLayer = document
                .getElementById("sdppp_layers")
                .getElementsByTagName("input")[0];
            this.$inputBound = document
                .getElementById("sdppp_bounds")
                .getElementsByTagName("input")[0];
            this.$inputSendLayer = document
                .getElementById("sdppp_send_layers")
                .getElementsByTagName("input")[0];

            this.$refreshLayer = document
                .getElementById("refresh_sdppp_layers");
            this.$refreshBound = document
                .getElementById("refresh_sdppp_bounds");
            this.$refreshSendLayer = document
                .getElementById("refresh_sdppp_send_layers");

            this.$getterSaveAndClose = document
                .getElementById("sdppp_getter_dialog_close");
            this.$senderSaveAndClose = document
                .getElementById("sdppp_sender_dialog_close");

            this.$getterSaveAndClose.addEventListener("click", () => {
                this.currentWidget.layerValue = this.$inputLayer.value;
                this.currentWidget.boundValue = this.$inputBound.value;
                this.currentWidget.render();
                this.currentWidget.action();
                closePopup();
            });
            this.$senderSaveAndClose.addEventListener("click", () => {
                this.currentWidget.sendLayerValue = this.$inputSendLayer.value;
                this.currentWidget.render();
                this.currentWidget.action();
                closePopup();
            });
        }
        
        getterConfig(widget) {
            popupId("sdppp_getter_dialog")
            callGlobalGradioFunction("show_getter_dialog")
            if (!this.insertedPop) {
                this.initDOM();
            }
            this.currentWidget = widget;
            if (widget.layerValue) {
                this.$inputLayer.value = widget.layerValue;
            }
            if (widget.boundValue) {
                this.$inputBound.value = widget.boundValue;
            }
            this.$refreshLayer.click();
            this.$refreshBound.click();
        }
        senderConfig(widget) {
            popupId("sdppp_sender_dialog")
            callGlobalGradioFunction("show_sender_dialog")
            if (!this.insertedPop) {
                this.initDOM();
            }
            this.currentWidget = widget;
            if (widget.sendLayerValue) {
                this.$inputSendLayer.value = widget.sendLayerValue;
            }
            this.$refreshSendLayer.click();
        }

        async initSocket() {
            if (this.socketInited) return Promise.resolve();;
            this.socket = io(location.origin, {
                transports: ["websocket"],
                path: '/sd-ppp/',
                query: {
                    api_level: 2,
                    type: 'sd'
                }
            });
            this.socketInited = true;

            return new Promise((resolve, reject) => {
                this.socket.on('connect', resolve);
                this.socket.on('disconnect', () => {
                    this.socketInited = false;
                });
                this.socket.on('s_run', () => {
                    const tab = document.getElementById('tabs').querySelector('button.selected');
                    const activeTabIndex = Array.prototype.indexOf.call(tab.parentElement.children, tab)
                    if (activeTabIndex == 0) document.getElementById('txt2img_generate').click()
                    if (activeTabIndex == 1) document.getElementById('img2img_generate').click()
                    if (activeTabIndex == 2) document.getElementById('extras_generate').click()
                });
				socket.emit('c_reset_instance_name', {
					name: document.title
				})
                setInterval(() => {
                    socket.emit('c_reset_instance_name', {
                        name: document.title
                    })
                }, 3000)
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
                    if (!this.layerValue || !this.boundValue) 
                        this.openConfig();
                    else {
                        this.action();
                    }
                });

            this.layerValue = '';
            this.boundValue = '';

            this.render();
        }

        render() {
            super.render();
            this.$el.className = "sdppp-get-widget";
            this.$getButton.className = "sdppp-get-button";
            if (this.layerValue && this.boundValue) {
                this.$settingButton.style.display = 'flex';
                this.$getButton.textContent = "SDPPP get";

            } else {
                this.$settingButton.style.display = 'none';
                this.$getButton.textContent = "SDPPP init";
            
            }
        }

        async action() {
            await SDPPP.instance.getImage({
                'layer_id': this.layerValue, 
                'use_layer_bounds': this.boundValue,
                'sd': {
                    elem_id: this.$gradioImage.id
                }
            })

            callGlobalGradioFunction('get_image_' + this.$gradioImage.id)
        }
    }

    class SenderWidget extends SDPPPWidget{
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
                    if (!this.sendLayerValue) 
                        this.openConfig();
                    else 
                        this.action();
                });

            this.sendLayerValue = '';

            this.render();
        }

        render() {
            super.render();
            this.$el.className = "sdppp-send-widget";
            this.$sendButton.className = "sdppp-send-button";

            if (this.sendLayerValue) {
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
                'layer': this.sendLayerValue, 
                'sd': {
                    image_urls: selected_image
                }
            })
        }

    }

    const insertedGetWidget = new WeakMap();
    const insertedSendWidget = new WeakMap();

    onUiUpdate(() => {
        gradioApp().querySelectorAll(".gradio-image").forEach((el) => {
            if (insertedGetWidget.has(el)) return;
            const widget = new GetterWidget(el);
            el.appendChild(widget.$el);
            insertedGetWidget.set(el, widget);
        })
        gradioApp().querySelectorAll(".gradio-gallery").forEach((el) => {
            if (insertedSendWidget.has(el)) return;
            const widget = new SenderWidget(el);
            el.appendChild(widget.$el);
            insertedSendWidget.set(el, widget);
        })
    })
})();
