import i18n from "../../../src/common/i18n.mjs";
import { parseDocumentIdentify } from "../../../src/common/photoshop/identify.mts";
import { SpeicialIDManager } from "../../../src/common/photoshop/specialLayer.mts";
import { sdpppX } from "../../../src/common/sdpppX.mts";
import { PhotoshopStoreHelper } from "../../../src/store/helpers.mts";
import { Identify } from "../../../src/store/photoshop.mts";
import { api, app } from "./comfy-globals.mts";
import { pagePhotoshopStoreMap } from "../photoshopModels.mts";

export function makeDocumentDataOptions() {
    const allStores = pagePhotoshopStoreMap.getAllStore();
    const options: string[] = []
    Object.values(allStores).forEach(store => {
        if (api.user && api.user != store.data.comfyUserToken) return;

        const storeOptions = PhotoshopStoreHelper.makeDocumentDataOptions(store)
            .map(option => makeDocumentOption(option, store.data.uname));
        options.push(...storeOptions);
    });
    return options;
}
export function getLayerOptionsByDocumentValue(documentValue: string, extraOptions: string[]) {
    let options = ['']
    const documentOption = parseDocumentOption(documentValue);
    if (!documentOption) return [];
    const storeOptions = PhotoshopStoreHelper.makeLayerOptions(documentOption.documentData, extraOptions)
    options.push(...storeOptions);
    return options
}
export function isPhotoshopConnected() {
    if (api.user) {
        return Object.values(pagePhotoshopStoreMap.getAllStore())
            .filter(store =>
                api.user == store.data.comfyUserToken
            ).length > 0;
    } else {
        return pagePhotoshopStoreMap.storeCount()
    }
}


export function makeDocumentOption(identify: Identify, instanceName: string) {
    return `${instanceName}/${identify}`
}
export function parseDocumentOption(value: string) {
    if (!value || !value.split) return null;
    if (value.indexOf('/') == -1) return null;
    const backendDatas = pagePhotoshopStoreMap.getAllPhotoshopDocumentData();
    let [instanceName, documentIdentify] = value.split('/');
    if (!documentIdentify) {
        documentIdentify = instanceName
        instanceName = Object.keys(backendDatas)[0];
    };
    if (!backendDatas[instanceName]) return null;
    const documentID = SpeicialIDManager.is_SPECIAL_DOCUMENT_CURRENT(documentIdentify) ?
        backendDatas[instanceName].activeDocumentID :
        parseDocumentIdentify(documentIdentify).id;

    if (backendDatas[instanceName]?.documents[documentID]) {
        const documentData = backendDatas[instanceName].documents[documentID];
        return {
            instance_id: backendDatas[instanceName].sid,
            identify: documentIdentify,
            documentData
        }
    }
    return null;
}
interface ComfyGraphNode {
    type: string,
    id: number,
    inputs: { link?: number }[],
    widgets: ComfyGraphWidget[]
}
interface ComfyGraphWidget {
    value: string
    serializeValue: () => Promise<string>
}

const getLink = function (origin_id: number) {
    const linkMap: Map<number, {
        origin_id: number,
        target_id: number
    }> | {
        origin_id: number,
        target_id: number
    }[] = app.graph.links;
    const isArray = Array.isArray(linkMap);
    if (isArray) {
        return linkMap.find(link => link && link.origin_id == origin_id);
    } else {
        return linkMap.get(origin_id);
    }
}

// todo groupnode
export function findDocumentNodeRecursive(_node: ComfyGraphNode): ComfyGraphNode | null {
    const allNodes: ComfyGraphNode[] = app.graph.nodes;

    const curNode = allNodes.find(node => _node.id == node.id);
    if (!curNode) return null;
    const result: ComfyGraphNode[] = [];
    findRecursive(curNode, result);
    if (result.length > 2) {
        const firstValue = result[0].widgets[0].value;
        if (
            !result
                .map(node => node.widgets[0].value)
                .every(value => value == firstValue)
        ) {
            throw new Error(i18n('Cannot connect multiple different document widgets with same value'));
        }
    }
    return result?.[0] || null;

    function findRecursive(node: ComfyGraphNode, result: ComfyGraphNode[]): ComfyGraphNode | null {
        if (node.type == 'SDPPP Get Document') {
            result.push(node);
            return node;
        }
        if (node.inputs.length == 0) return null;
        for (const input of node.inputs) {
            if (input.link) {
                const link = getLink(input.link);
                if (!link) continue;
                const targetNode = allNodes.find(node => node.id == link.origin_id);
                if (!targetNode) continue;
                const maybeDocumentWidget = findRecursive(targetNode, result);
                if (maybeDocumentWidget) return maybeDocumentWidget;
            }
        }
        return null;
    }
}

sdpppX.findDocumentNodeRecursive = findDocumentNodeRecursive;