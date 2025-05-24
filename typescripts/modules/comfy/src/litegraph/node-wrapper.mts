import i18n from "../../../../src/common/i18n.mts";
import { GetImageFromLayerNode, SendImageToLayerNode } from "../comfy-nodes/legacy-nodes.mjs";
import { GetDocumentNode, GetLayerNode, GetLayersInGroupNode, GetLinkedLayersNode, GetSelectionNode, GetTextFromLayerNode, ParseLayerInfoNode, RunPhotoshopActionNode, SendTextToLayerNode } from "../comfy-nodes/nodes.mjs";
import { SDPPPNode } from "../comfy-nodes/SDPPPNode.mjs";
import { SDPPPNodeWithInput } from "../comfy-nodes/SDPPPNodeWithInput.mjs";
declare const comfyAPI: any;

const SDPPPNodeList = {
    'Get Image From Photoshop Layer': GetImageFromLayerNode,
    'Send Images To Photoshop': SendImageToLayerNode,
    'SDPPP Send Text To Layer': SendTextToLayerNode,
    'SDPPP Get Text From Layer': GetTextFromLayerNode,
    'SDPPP Parse Layer Info': ParseLayerInfoNode,
    'SDPPP Get Linked Layers': GetLinkedLayersNode,
    'SDPPP Get Layers In Group': GetLayersInGroupNode,
    'SDPPP Get Layer By ID': GetLayerNode,
    'SDPPP Get Document': GetDocumentNode,
    'SDPPP Get Selection': GetSelectionNode,
    'SDPPP Select Layer And Run PS Action': RunPhotoshopActionNode,
    // 'SDPPP Settings': SDPPPSettingsNode,
}
export const ComfyNodeDefList: Record<any, any> = {} as any

export function wrapNode(nodeType: any, nodeDef: any) {
    const comfyClass = nodeType.comfyClass || nodeDef.name;
    ComfyNodeDefList[comfyClass] = nodeDef;
    
    if (comfyClass in SDPPPNodeList) {
        nodeType.title = i18n(nodeDef.display_name);
        nodeDef.display_name = i18n(nodeDef.display_name);
        SDPPPNode.registerNodeType(nodeType, nodeDef, SDPPPNodeList[comfyClass as keyof typeof SDPPPNodeList])

    } else if (comfyClass.startsWith('workflow') && comfyAPI.groupNode.GroupNodeHandler.getGroupData(nodeType)) {
        const groupData = comfyAPI.groupNode.GroupNodeHandler.getGroupData(nodeType)
        let containsSDPPPNode = false;
        groupData.nodeData.nodes.forEach((node: any, index: number) => {
            // might be another groupNode
            if (node.type in SDPPPNodeList) containsSDPPPNode = true;
        })
        
        if (containsSDPPPNode)
            SDPPPNode.registerNodeType(nodeType, nodeDef, SDPPPNodeWithInput)

    } else {
        return;
    }
}
