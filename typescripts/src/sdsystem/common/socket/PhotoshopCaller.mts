import { pageStore } from "../models/photoshopModels.mjs";
import { Socket, SocketConstructor } from "../../../common/socket/Socket.mjs";
import { SDPPPNode } from "../../comfy/comfy-nodes/SDPPPNode.mts";
import { app } from "../../comfy/comfy-globals.mts";
import { GetDocumentNode } from "../../comfy/comfy-nodes/nodes.mts";
import { PhotoshopCalleeActions } from "../../../../photoshop-internal/src/logics/socket/PhotoshopCallee.mts";

export interface PhotoshopCaller {
    importPSDDataURLFromPhotoshop(sid: string, document_identify: string): Promise<string>;
    exportPSDDataURLToPhotoshop(sid: string, document_identify: string, dataURL: string): Promise<void>;
    getImage(sid: string, payload: PhotoshopCalleeActions['getImage']['params']): Promise<any>;
    sendImage(sid: string, payload: PhotoshopCalleeActions['sendImages']['params']): Promise<any>;
}

export interface PhotoshopCallerActions {
    extractPSD: {
        params: {
            from_sid: string;
        }
    }
    uploadImage: {
        params: {
            image: Uint8Array;
            filename: string;
            overwrite?: boolean;
        },
        result: {
            name: string;
            type: string;
            subfolder: string;
        }
    }
}

export function PhotoshopCallerSocket(SocketClass: SocketConstructor<Socket>) {
    
    return class extends SocketClass implements PhotoshopCaller {
        constructor(url: string) {
            super(url);
            this.socket.on('F_photoshop', (payload: any, callback: any) => {
                if (payload.action == 'extractPSD') {
                    app.graph.nodes.forEach((node: any) => {    
                        if (node.type == 'SDPPP Get Document') {
                            (SDPPPNode.nodeMap.get(node) as GetDocumentNode)?.extractPSD(payload.params.from_sid, '');
                        }
                    })
                }
                callback({})
            })
        }

        public async importPSDDataURLFromPhotoshop(sid: string, document_identify: string): Promise<string> {
            const blob: Blob = await new Promise((resolve, reject) => {
                this.socket.emit('B_photoshop', {
                    action: 'psd',
                    sid: sid,
                    params: {
                        action: 'get',
                        fromSSID: pageStore.data.sid,
                        document_identify: document_identify
                    }
                }, (payload: any) => {
                    resolve(payload.data as any);
                });
            });
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            return new Promise(resolve => {
                reader.onloadend = function () {
                    var dataURL = reader.result;
                    resolve(dataURL as string);
                }
            })
        }

        public async exportPSDDataURLToPhotoshop(sid: string, document_identify: string, dataURL: string) {
            const buffer = await fetch(dataURL).then(res => res.arrayBuffer());
            await new Promise((resolve, reject) => {
                this.socket.emit('B_photoshop', {
                    action: 'psd',
                    sid: sid,
                    params: {
                        action: 'extract',
                        fromSSID: pageStore.data.ssid,
                        document_identify: document_identify,
                        data: buffer
                    }
                }, (payload: any) => {
                    resolve(payload as any);
                });
            });
        }

        public async getImage(sid: string, payload: PhotoshopCalleeActions['getImage']['params']) {
            return new Promise((resolve, reject) => {
                this.socket.emit('B_photoshop', {
                    action: 'getImage',
                    sid: sid,
                    params: payload
                }, (data: any) => {
                    data && data.error ? reject(new Error(data.error)) : resolve(data);
                });
            });
        }

        public async sendImage(sid: string, payload: PhotoshopCalleeActions['sendImages']['params']) {
            return new Promise((resolve, reject) => {
                this.socket.emit('B_photoshop', {
                    action: 'sendImages',
                    sid: sid,
                    params: payload
                }, (data: any) => {
                    data && data.error ? reject(new Error(data.error)) : resolve(data);
                });
            });
        }
    }
}

