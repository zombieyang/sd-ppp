import { PageStore } from "../store/page.mjs";
import { PhotoshopDataDocument, PhotoshopStore } from "../../../plugins/common/store/photoshop.mjs";
import { StoreMap } from "../../../common/store/store-map.mjs";
import { api } from "../../comfy/comfy-globals.mts";

class PagePhotoshopStoreMap extends StoreMap<PhotoshopStore> {
    createStore(data: any, version: number): PhotoshopStore {
        return new PhotoshopStore(data, version);
    }

    getStoreByName(instanceName: string): PhotoshopStore | undefined {
        for (const store of this.storeMap.values()) {
            if (store.data.uname === instanceName) {
                return store;
            }
        }
    }

    getAllPhotoshopDocumentData() {
        const ret: {
            [key: string]: {
                sid: string,
                activeDocumentID: number,
                documents: PhotoshopDataDocument
            }
        } = {}
        this.storeMap.forEach((store) => {
            ret[store.data.uname] = {
                sid: store.data.sid,
                activeDocumentID: store.data.activeDocumentID,
                documents: store.data.documents
            };
        });
        return ret;
    }
}

export const pagePhotoshopStoreMap = new PagePhotoshopStoreMap();
export const pageStore = new PageStore();

// in webview
if ((window as any).uxpHost) {
    const callback = (e: MessageEvent) => {
        if (e.data.action !== "webview-connect" || !e.data.payload.webviewFromSid) return console.log(e);
        e.data.payload.webviewFromSid = e.data.payload.webviewFromSid;
        pageStore.setWebviewFromSid(e.data.payload.webviewFromSid);
        window.removeEventListener('message', callback);
    }
    window.addEventListener('message', callback);
    (window as any).uxpHost.postMessage({
        from: 'sdppp-webview',
        action: "webview-connect",
    }, '*')
}
function refreshTitle() {
    if (document.title !== pageStore.data.title) {
        pageStore.setTitle(document.title);
    }
    requestAnimationFrame(refreshTitle);
}
requestAnimationFrame(refreshTitle)

let modelInited = false;
export async function waitModelInited() {
    if (modelInited) {
        return Promise.resolve();
    }
    api.user && pageStore.setComfyUserToken(api.user);
    const maxImageWH = await api.getSetting('sdppp.maxImageWH')
    if (maxImageWH) {
        pageStore.setMaxImageWH(maxImageWH)
    }
    modelInited = true;
}