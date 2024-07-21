import { app } from "photoshop";
import { storage } from "uxp";
import { getAllSubLayer } from "./util";
import socketio from './library/socket.io.js'
import sendImages from "./events/send_images";
import getImage from "./events/get_image";
import getActiveHistoryStateId from "./events/get_active_history_state_id";
import Model from "./model.js";

class ComfyConnection {
    static instance = null;

    // todo move to Model.js
    static _connectStateCallbacks = [];
    static onConnectStateChange(callback) {
        ComfyConnection._connectStateCallbacks.push(callback);
    }
    static _callConnectStateChange() {
        ComfyConnection._connectStateCallbacks.forEach(cb => {
            try {
                cb()
            } catch (e) { console.error(e) }
        });
    }
    // todo move to Model.js
    static _pageInstancesCallbacks = [];
    static onPageInstancesChange(callback) {
        ComfyConnection._pageInstancesCallbacks.push(callback);
    }
    static _callPageInstancesChange(data) {
        ComfyConnection._pageInstancesCallbacks.forEach(cb => {
            try {
                cb(data)
            } catch (e) { console.error(e) }
        });
    }

    static createInstance(backendURL) {
        if (ComfyConnection.instance) {
            ComfyConnection.instance.disconnect();
        }
        ComfyConnection.instance = new ComfyConnection(backendURL);
    }

    get isConnected() {
        return this.socket != null && this.socket.connected === true;
    }
    get isReconnecting() {
        return this.socket != null && this.socket.connected === false && this.socket.active === true;
    }

    backendURL = '';
    serverType = '';
    interval = null;
    lastErrorMessage = '';
    constructor(backendURL) {
        ComfyConnection.instance = this;
        this.backendURL = backendURL.replace(/\/*$/, '');
        this.connect();
    }
    connect() {
        if (!this.socket) {
            this._createSocket();
        }
        this.socket.connect();
    }

    disconnect() {
        console.log('disconnect' + this.socket);
        if (this.socket) {
            this.socket.close()
            this.socket = null;
            ComfyConnection._callConnectStateChange();
        }
    }

    _createSocket() {
        console.log('create socket', this.backendURL)
        const socket = this.socket = socketio(this.backendURL, {
            autoConnect: false,
            transports: ["websocket"],
            path: '/sd-ppp/',
            query: {
                api_level: 2,
                type: 'photoshop'
            }
        });
        this.interval = setInterval(() => {
            if (!this.isConnected) return;
        }, 3000)

        this.lastErrorMessage = '';
        socket.on('connect_error', (error) => {
            if (socket.active) {
                console.error(`connect_error ${error} reconnecting...`)
            } else {
                this.lastErrorMessage = error
                console.error(`connect_error ${error} disconnected`)
            }
            ComfyConnection._callConnectStateChange();
        });
        socket.on('connect', () => {
            console.log('connect')
            storage.secureStorage.setItem('backendURL', this.backendURL);
            ComfyConnection._callConnectStateChange();
        });
        socket.on('disconnect', (...args) => {
            console.log('disconnect')
            ComfyConnection._callConnectStateChange();
        });

        socket.on('s_get_image', async (data, callback) => {
            try {
                const startTime = Date.now();
                const result = await getImage(this.backendURL, Object.assign(data, { isComfy: this.serverType == "comfy" }))
                console.log('get_image cost', Date.now() - startTime, 'ms');
                callback(result)
            } catch (e) { console.error(e); callback({ error: e.message }) }
        })
        socket.on('s_send_images', async (data, callback) => {
            try {
                const result = await sendImages(this.backendURL, Object.assign(data, { isComfy: this.serverType == "comfy" }))
                callback(result)
            } catch (e) { console.error(e); callback({ error: e.message }) }
        })
        socket.on('s_get_active_history_state_id', async (data, callback) => {
            try {
                callback({
                    history_state_id: Model.instance.historyStateId
                })
            } catch (e) { console.error(e); callback({ error: e.message }) }
        })
        socket.on('s_confirm', (data) => {
            this.serverType = data.server_type
        })
        socket.on('c_progress', (data) => {
            ComfyConnection._callPageInstancesChange(data);
        })
        socket.on('c_get_documents', (d, callback) => {

            callback(app.documents.reduce((ret, document) => {
                ret[document.name + ` (id:${document.id})`] = {
                    name: document.name + ` (id:${document.id})`,
                    layers: getAllSubLayer(document) 
                }
                return ret;
            }, { 
                '### Active Document ###': {
                    name: '### Active Document ###',
                    layers: getAllSubLayer(app.activeDocument) 
                } 
            }))
        })
        setInterval(() => {
            socket.emit('b_get_pages', (data) => {
                ComfyConnection._callPageInstancesChange(data);
            })
        }, 1500);
    }

    pageInstanceRun(sid) {
        this.socket.emit('b_page_run', { sid });
    }
}

export default ComfyConnection;