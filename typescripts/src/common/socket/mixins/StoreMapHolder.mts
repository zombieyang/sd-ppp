import { StoreMap } from "../../store/store-map.mjs";
import { Socket, SocketConstructor } from "../Socket.mjs";

export function StoreMapHolderSocket(storeMap: StoreMap<any>, targetType: string) {
    return function (SocketClass: SocketConstructor<Socket>) {
        return class extends SocketClass {
            constructor(url: string) {
                super(url);
                this.socket.on('store_flush', (payload: {
                    sid: string,
                    type: string,
                    operations: any[],
                    fromVersion: number,
                }) => {
                    if (payload.type !== targetType) {
                        return;
                    }
                    // console.log('photoshop flush', payload.sid)
                    const store = storeMap.getStore(payload.sid);
                    if (!store) {
                        return this.socket.emit('store_request', { sid: payload.sid }, (payload: any) => {
                            storeMap.addStore(payload.sid, payload.data, payload.version);
                        });

                    } else {
                        if (store.patchVersionAcceptable(payload.fromVersion)) {
                            store.patchData(payload.operations)
                        } else {
                            console.warn('patch version not acceptable from',
                                payload.fromVersion, 'current version is',
                                store.version
                            )
                            this.socket.emit('store_request', { type: targetType }, (payload: any) => {
                                storeMap.sync(payload);
                            });
                        }
                    }
                })
                this.socket.on('store_remove', (payload: { sid: string }) => {
                    storeMap.removeStore(payload.sid);
                })
                this.socket.on('sdppp_inited', (payload: any) => {
                    this.socket.emit('store_request', { type: targetType }, (payload: any) => {
                        storeMap.sync(payload);
                    });
                })
            }
        }
    }
}