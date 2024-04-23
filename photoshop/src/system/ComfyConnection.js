import { app, imaging, core } from "photoshop";
import { storage } from "uxp";
import { findInAllSubLayer, getAllSubLayer, unTrimImageData } from "./util";
import Jimp from "./jimp.min";
const executeAsModal = core.executeAsModal;

async function executeAsModalUntilSuccess(...args) {
    let result;
    let failed = true;
    while(failed) {
        try {
            result = await executeAsModal(...args);
            failed = false;
        } catch (e) {
            if (e.number != 9) {
                failed = false; // This case is hit if the targetFunction throws an exception
            }
        }
        await new Promise(r => setTimeout(r, 200));
    }
    return result;
}

function getDesiredBounds(boundsLayerID) {
    const docBounds = {
        left: 0, 
        top: 0, 
        right: app.activeDocument.width, 
        bottom: app.activeDocument.height,
        width: app.activeDocument.width,
        height: app.activeDocument.height
    };
    // if boundsLayerID == -1, use selection bounds
    if (boundsLayerID == -1) {
        // if no selection use document bounds
        const selectionBounds = app.activeDocument.selection?.bounds;
        if (!selectionBounds) return docBounds;
        return {
            left: selectionBounds.left,
            top: selectionBounds.top,
            right: selectionBounds.right,
            bottom: selectionBounds.bottom,
            width: selectionBounds.width,
            height: selectionBounds.height
        }
    }
    let boundsLayer;
    if (boundsLayerID > 0) {
        boundsLayer = findInAllSubLayer(app.activeDocument, boundsLayerID)
        if (!boundsLayer) throw new Error(`Bounds layer(id: ${boundsLayerID}) not found`);
    }
    // null boundsLayer = document bounds
    if (!boundsLayer) return docBounds;
    // empty boundsLayer = document bounds
    const boundsLayerBounds = boundsLayer.bounds
    const isEmptyBoundsLayer = boundsLayerBounds.left == 0 && boundsLayerBounds.top == 0 && boundsLayerBounds.right == 0 && boundsLayerBounds.bottom == 0;
    if (isEmptyBoundsLayer) return docBounds;
    // normal layer
    let desireBounds = {
        left: boundsLayerBounds.left,
        top: boundsLayerBounds.top,
        right: boundsLayerBounds.right,
        bottom: boundsLayerBounds.bottom,
        width: boundsLayerBounds.width,
        height: boundsLayerBounds.height
    };
    return desireBounds
}

async function getPixelsDataHelper(layer, desireBounds) {
    let options = {
        documentID: app.activeDocument.id,
        applyAlpha: false,
        sourceBounds: desireBounds,
    }
    if (layer) options.layerID = layer.id
    let pixels;
    try {
        pixels = await imaging.getPixels(options)
    } catch (e) {
        console.error(e.message)
        return new Uint8Array(desireBounds.width * desireBounds.height * 4);
    }
    let psImageData = pixels.imageData
    const pixelDataFromAPI = await psImageData.getData()
    Promise.resolve().then(() => { psImageData.dispose() })
    return pixelDataFromAPI
}

async function getPixelsData(layer, desireBounds) {
    // layer null = document data
    if (!layer) {
        return await getPixelsDataHelper(null, desireBounds);
    }
    // normal layer
    return getPixelsDataHelper(layer, desireBounds);
}

// ps returns trimmed data so need padding
function padAndTrimLayerDataToDesireBounds(layer, pixelDataFromAPI, desireBounds) {
    if (pixelDataFromAPI.length == desireBounds.width * desireBounds.height * 4) {
        return pixelDataFromAPI;
    }
    let pixelDataForReturn = new Uint8Array(desireBounds.width * desireBounds.height * 4);
    let bounds = {
        left: 0,
        top: 0,
        right: app.activeDocument.width,
        bottom: app.activeDocument.height,
    }
    if (layer) bounds = layer.bounds;
    unTrimImageData(
        pixelDataFromAPI,
        pixelDataForReturn, 
        bounds,
        desireBounds
    )
    return pixelDataForReturn;
}

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

    pushData(data) {
        if (!this.socket || this.socket.readyState != WebSocket.OPEN) {
            console.error('Connection not open');
            return;
        }
        try{
            this.socket.send(JSON.stringify({
                push_data: data,
            }));
        } catch (e) { console.error(e) }
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
                const layerName = payload.params.layer_name
                await Promise.all(
                    imageIds.map(async imageId => {
                        let layer;
                        let existingLayerName;
                        let newLayerName;
                        await executeAsModalUntilSuccess(async () => {
                            if (layerName) {
                                let imageIndexSuffix = ""
                                if (imageIds.length > 1){
                                    imageIndexSuffix = ` ${imageIds.indexOf(imageId)}`
                                }
                                existingLayerName = layerName + imageIndexSuffix
                                layer = await app.activeDocument.layers.find(l => l.name == existingLayerName)
                            }
                            if (!layer) {
                                newLayerName = existingLayerName ?? 'Comfy Images ' + imageId
                                layer = await app.activeDocument.createLayer("pixel", {
                                    name: newLayerName
                                })
                            }
                        })

                        const jimp = await Jimp.read(this.comfyURL + '/finished_images?id=' + imageId)
                        let putPixelsOptions = {
                            layerID: layer.id,
                            imageData: await imaging.createImageDataFromBuffer(
                                jimp.bitmap.data,
                                {
                                    width: jimp.bitmap.width,
                                    height: jimp.bitmap.height,
                                    components: 4,
                                    colorSpace: "RGB"
                                }
                            ),
                            replace: true,
                        }
                        if (!newLayerName) {
                            putPixelsOptions.targetBounds = layer.bounds
                        }
                        await executeAsModalUntilSuccess(async () => {
                            await imaging.putPixels(putPixelsOptions)
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
                const boundsLayerID = payload.params.use_layer_bounds

                await executeAsModalUntilSuccess(async () => {
                    const startTime = Date.now();
                    let uploadName = 0;
                    try {
                        let layer;
                        if (layerID > 0) {
                            layer = findInAllSubLayer(app.activeDocument, layerID)
                            if (!layer) throw new Error(`Layer(id: ${layerID}) not found`);
                        }
                        const desireBounds = getDesiredBounds(boundsLayerID);
                        const pixelDataFromAPI = await getPixelsData(layer, desireBounds)
                        const pixelDataForReturn = padAndTrimLayerDataToDesireBounds(layer, pixelDataFromAPI, desireBounds)
                        // console.log('getPixels', Date.now() - startTime, 'ms');
                        // log desire size
                        const image = await new Promise((resolve, reject)=> {
                            new Jimp({
                                data: pixelDataForReturn,
                                width: desireBounds.width,
                                height: desireBounds.height
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

            } else if (payload.action == 'get_active_history_state_id') {
                try {
                    let result = {};
                    const historyStates = app.activeDocument?.historyStates;
                    if (historyStates && historyStates.length > 0) {
                        const historyState = historyStates[historyStates.length - 1];
                        result.history_state_id = historyState.id;
                    } 
                    this.socket.send(
                        JSON.stringify({
                            call_id: payload.call_id,
                            result: result
                        })
                    )
                } catch (e) {
                    this.socket.send(
                        JSON.stringify({
                            call_id: payload.call_id,
                            error: e.message
                        })
                    )
                    throw e
                }
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