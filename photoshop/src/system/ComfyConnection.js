import { app, imaging, core } from "photoshop";
import { storage } from "uxp";
import { findInAllSubLayer, getAllSubLayer, unTrimImageData } from "./util";
import Jimp from "./jimp.min";
const executeAsModal = core.executeAsModal;

class ComfyConnection {
    static instance = null;

    static _connectStateCallbacks = [];
    static onConnectStateChange(callback) {
        ComfyConnection._connectStateCallbacks.push(callback);
    }
    static _callConnectStateChange() {
        ComfyConnection._connectStateCallbacks.forEach(cb => {
            try {
                cb(ComfyConnection.instance?.isConnected)
            } catch (e) { console.error(e) }
        });
    }

    static createInstance(comfyURL) {
        if (ComfyConnection.instance && ComfyConnection.instance.isConnected) {
            ComfyConnection.instance.disconnect();
        }
        ComfyConnection.instance = new ComfyConnection(comfyURL);
    }

    get isConnected() {
        return this._isConnected === true;
    }

    comfyURL = '';
    constructor(comfyURL) {
        ComfyConnection.instance = this;
        if (!comfyURL) {
            comfyURL = 'http://127.0.0.1:8188'
        }
        this.comfyURL = comfyURL.replace(/\/*$/, '');
        this.connect();
    }

    async onMessage(event) {
        console.log("Message from comfy ", event.data);
        try {
            const payload = JSON.parse(event.data);
            if (payload.action == 'get_layers') {
                const allLayers = getAllSubLayer(app.activeDocument);
                this.socket.send(
                    JSON.stringify({
                        call_id: payload.call_id,
                        result: { layers: allLayers }
                    })
                )


            } else if (payload.action == 'send_images') {
                const imageIds = payload.params.image_ids
                await Promise.all(
                    imageIds.map(async imageId => {
                        let layer;
                        await executeAsModal(async () => {
                            layer = await app.activeDocument.createLayer("pixel", {
                                name: 'Comfy Images ' + imageId
                            })
                        })

                        const jimp = await Jimp.read(this.comfyURL + '/finished_images?id=' + imageId)

                        await executeAsModal(async () => {
                            await imaging.putPixels({
                                layerID: layer.id,
                                imageData: await imaging.createImageDataFromBuffer(
                                    jimp.bitmap.data,
                                    {
                                        width: jimp.bitmap.width,
                                        height: jimp.bitmap.height,
                                        components: 4,
                                        colorSpace: "RGB"
                                    }
                                )
                            })
                        })
                    })
                )
                this.socket.send(
                    JSON.stringify({
                        call_id: payload.call_id,
                        result: {  }
                    })
                )

            } else if (payload.action == 'get_image') {
                const layerID = payload.params.layer_id

                await executeAsModal(async () => {
                    const startTime = Date.now();
                    let uploadName = 0;
                    try {
                        const layer = findInAllSubLayer(app.activeDocument, layerID)
                        if (!layer) throw new Error(`Layer(id: ${layerID}) not found`);

                        const bounds = layer.bounds;
                        // TODO support selection area
                        const desireBounds = {
                            left: 0,
                            top: 0,
                            right: app.activeDocument.width,
                            bottom: app.activeDocument.height
                        }
                        const isEmptyLayer = bounds.left == 0 && bounds.top == 0 && bounds.right == 0 && bounds.bottom == 0;
                        const isFitLayer = bounds.left == desireBounds.left && bounds.top == desireBounds.top && bounds.right == desireBounds.right && bounds.bottom == desireBounds.bottom;
                        let pixelDataFromAPI = null;
                        let pixelDataForReturn = null;
                        if (!isEmptyLayer) {
                            const pixels = await imaging.getPixels({
                                documentID: app.activeDocument.id,
                                layerID: layerID,
                                applyAlpha: false,
                                sourceBounds: {
                                    left: 0,
                                    top: 0,
                                    width: app.activeDocument.width,
                                    height: app.activeDocument.height
                                }
                            })
        
                            let psImageData = pixels.imageData
                            // Uint8Array
                            pixelDataFromAPI = await psImageData.getData()
                            Promise.resolve().then(() => { psImageData.dispose() })
                        }
                        // console.log('getPixels', Date.now() - startTime, 'ms');
                        if (isFitLayer) {
                            pixelDataForReturn = pixelDataFromAPI;

                        } else {
                            pixelDataForReturn = new Uint8Array(app.activeDocument.width * app.activeDocument.height * 4)
                            if (!isEmptyLayer) {
                                unTrimImageData(
                                    pixelDataFromAPI,
                                    pixelDataForReturn, {
                                        left: Math.max(bounds.left, 0),
                                        top: Math.max(bounds.top, 0),
                                        right: Math.min(bounds.right, app.activeDocument.width),
                                        bottom: Math.min(bounds.bottom, app.activeDocument.height)
                                    }, {
                                        width: app.activeDocument.width,
                                        height: app.activeDocument.height
                                    }
                                )
                            }

                        }

                        // console.log('untrimed', Date.now() - startTime, 'ms');
                        const image = await new Promise((resolve, reject)=> {
                            new Jimp({
                                data: pixelDataForReturn,
                                width: app.activeDocument.width,
                                height: app.activeDocument.height
                            }, (err, image) => {
                                err ? reject(err) : resolve(image);
                            })                                          
                        })
                        image.quality(100);
                        const file = await image.getBufferAsync(Jimp.MIME_PNG);
                        // console.log('create pngfile', Date.now() - startTime, 'ms');
                        
                        const fd = new FormData();
                        const PhotoshopBlob = new Blob([file], { type: "image/png" });
                        fd.append('image', PhotoshopBlob, "PhotoshopBlob.png");
                        fd.append('overwrite', "true");
                        // console.log('start upload', Date.now() - startTime, 'ms');
                        const promise = fetch(this.comfyURL + '/upload/image', {
                            method: 'POST',
                            body: fd,
                        }).then(res => {
                            if (res.status == 200)
                                return res.json()
                            else
                                throw new Error('HTTP ' + res.status)
                        })
                        // console.log('finish upload', Date.now() - startTime, 'ms')
                        const result = await promise
                        // console.log('upload resulted', Date.now() - startTime, 'ms')
                        
                        if (result.error) throw new Error(result.error);
                        if (!result.name) throw new Error('No upload_name')
                        uploadName = result.name

                    } catch(e) {
                        this.socket.send(
                            JSON.stringify({
                                call_id: payload.call_id,
                                error: e.message
                            })
                        )
                        throw e
                    }

                    this.socket.send(
                        JSON.stringify({
                            call_id: payload.call_id,
                            result: {
                                upload_name: uploadName
                            }
                        })
                    )
                }, { commandName: "get content of layer " + layerID })

            }
        } catch (e) { console.error(e) }
    }
    reconnectTimer = null
    
    connect() {
        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }
        // Create WebSocket connection.
        const socket = this.socket = new WebSocket(this.comfyURL.replace('http://', 'ws://') + '/photoshop_instance?version=1');

        socket.addEventListener("open", (ev) => {
            storage.secureStorage.setItem('comfyURL', this.comfyURL);
            console.log('Connection open')
            this._isConnected = true;
            ComfyConnection._callConnectStateChange();
        });

        socket.addEventListener("message", this.onMessage.bind(this));

        socket.addEventListener("close", (event) => {
            console.log("Connection close", event.reason);
            this._isConnected = false;
            ComfyConnection._callConnectStateChange();
        });
        socket.addEventListener('error', (event) => {
            console.log("Connection error", event);
            this.reconnectTimer = setTimeout(() => {
                console.log(`Reconnecting to ${this.comfyURL.replace('http://', 'ws://').replace(/\/*$/, '')}`)
                this.connect();
            }, 3000)
        })
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}

export default ComfyConnection;