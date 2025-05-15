import { Socket, SocketConstructor } from "../common/socket/Socket.mjs";
import { app } from "../../modules/comfy/src/comfy-globals.mts";
import { PhotoshopCaller } from "./PhotoshopCallerInterface.mts";
import { PhotoshopCalleeActions } from "./PhotoshopCalleeInterface.mts";

export function PhotoshopCallerSocket(SocketClass: SocketConstructor<Socket>) {

    return class extends SocketClass implements PhotoshopCaller {
        constructor(url: string) {
            super(url);
            this.socket.on('F_photoshop', (payload: any, callback: any) => {
                try {
                    if (payload.action == 'extractPSD') {
                        app.graph.nodes.forEach((node: any) => {
                            if (node.type == 'SDPPP Get Document') {
                                this.extractPSD(node, payload.params.from_sid, '');
                            }
                        })
                    }
                    callback({})
                } catch (error) {
                    callback({ error: error instanceof Error ? error.message : (error?.toString() || 'unknown error') })
                }
            })
        }

        public async importPSDDataURLFromPhotoshop(sid: string, document_identify: string, fromSSID: string): Promise<string> {
            const blob: Blob = await new Promise((resolve, reject) => {
                this.socket.emit('B_photoshop', {
                    action: 'psd',
                    sid: sid,
                    params: {
                        action: 'get',
                        fromSSID,
                        document_identify
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

        public async exportPSDDataURLToPhotoshop(sid: string, document_identify: string, dataURL: string, fromSSID: string) {
            const buffer = await fetch(dataURL).then(res => res.arrayBuffer());
            await new Promise((resolve, reject) => {
                this.socket.emit('B_photoshop', {
                    action: 'psd',
                    sid: sid,
                    params: {
                        action: 'extract',
                        fromSSID,
                        document_identify,
                        data: buffer
                    }
                }, (payload: any) => {
                    resolve(payload as any);
                });
            });
        }

        // public async getImage(sid: string, payload: PhotoshopCalleeActions['getImage']['params']) {
        //     return new Promise((resolve, reject) => {
        //         this.socket.emit('B_photoshop', {
        //             action: 'getImage',
        //             sid: sid,
        //             params: payload
        //         }, (data: any) => {
        //             data && data.error ? reject(new Error(data.error)) : resolve(data);
        //         });
        //     });
        // }

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

        public async getSpecialIdentifierValue(sid: string, payload: PhotoshopCalleeActions['getSpecialIdentifierValue']['params']) {
            return new Promise((resolve, reject) => {
                this.socket.emit('B_photoshop', {
                    action: 'getSpecialIdentifierValue',
                    sid: sid,
                    params: payload
                }, (data: any) => {
                    data && data.error ? reject(new Error(data.error)) : resolve(data);
                });
            });
        }

        // same as the one in SDPPPDocument node.
        private async extractPSD(node: any, sid: string, documentIdentify: string) {
            if (node.properties.psd) {
                await this.exportPSDDataURLToPhotoshop(sid, documentIdentify, node.properties['psd'], this.socket.id || "??")
                    .then(async () => {
                        await new Promise(resolve => setTimeout(resolve, 300));
                        (globalThis as any).app.canvas.draw(true, true)
                    })
                    .catch(console.error);
            }
        }
    }
}