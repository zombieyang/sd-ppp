import { PageStore } from "../../src/store/page.mts";
import { PhotoshopDataDocument, PhotoshopStore } from "../../src/store/photoshop.mts";
import { StoreMap } from "../../src/common/store/store-map.mts";
import { api, app } from "./src/comfy-globals.mts";

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
function checkComfyStatus() {
    if (document.title !== pageStore.data.title) {
        pageStore.setTitle(document.title);
    }
    if ('user' in app.extensionManager) {
        pageStore.setComfyOrgLoggedIn(app.extensionManager.user.isLoggedIn);
    }
    requestAnimationFrame(checkComfyStatus);
}
requestAnimationFrame(checkComfyStatus)

let modelInited = false;
export async function waitModelInited() {
    if (modelInited) {
        return Promise.resolve();
    }
    api.user && pageStore.setComfyUserToken(api.user);
    const useSliderForNumberWidget = await api.getSetting('sdppp.useSliderForNumberWidget')
    if (useSliderForNumberWidget) {
        pageStore.setUseSliderForNumberWidget(useSliderForNumberWidget)
    }
    modelInited = true;
}