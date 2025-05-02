import { Flusher } from "../../flusher.mjs";
import { MainStore } from "../../store/store.mjs";
import { Socket, SocketConstructor } from "../Socket.mjs";

export function MainStoreHolderSocket(store: MainStore<any>, type: string) {
    return function (SocketClass: SocketConstructor<Socket>) {
        return class extends SocketClass {
            constructor(url: string) {
                super(url);
                this.socket.on('store_request', (payload: any, callback: any) => {
                    callback({
                        data: store.data,
                        version: store.version
                    })
                });
                let flusher = new Flusher(async () => {
                    const { operations, fromVersion, toVersion } = store.flush()
                    await new Promise<void>(resolve => {
                        // console.log('start flush', fromVersion, operations)
                        let callbacked = false;
                        setTimeout(() => {
                            if (callbacked) return;
                            console.warn('flush timeout')
                            resolve();
                        }, 5000)
                        this.socket.emit('store_flush', {
                            operations,
                            fromVersion
                        }, (res: any) => {
                            callbacked = true;
                            resolve();
                            if (res?.error) {
                                console.error('flush error', res.error)
                            } else {
                                store.flushDone(toVersion)
                            }
                        })
                    });
                })
                store.subscribe('/', () => {
                    flusher.runFlush();
                })
                this.socket.on('disconnect', () => {
                    flusher.pause();
                });
                this.socket.on('connect', () => {
                    store.setSID(this.socket.id || '')
                    requestAnimationFrame(() => {
                        this.socket.emit('sdppp_init', {
                            type,
                            data: store.data,
                            version: store.version
                        })
                    });
                })
                this.socket.on('sdppp_inited', (payload: any) => {
                    flusher.resume();
                })
            }
        }
    }
}