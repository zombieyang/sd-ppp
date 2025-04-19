import { DocumentWidget } from "../litegraph/fe-widgets.mjs";
import { SDPPPNode } from "./SDPPPNode.mjs";

export interface NodeWithDocumentOutput {
    documentWidget: DocumentWidget | null;
}
export interface NodeWithLayerOutput extends NodeWithDocumentOutput {
}
export class SDPPPInput {
    protected node: any
    protected inputIndex: number
    public get index() {
        return this.inputIndex
    }
    constructor(node: any, index: number) {
        this.node = node;
        this.inputIndex = index;
    }
    public update() {
        // this.node.inputs[this.inputIndex].label = i18n(this.node.inputs[this.inputIndex].name)
    }

    public connected: boolean = false;
}
export class DocumentInput extends SDPPPInput {
    get documentWidget() {
        const nodeWithDocumentOutput = findSourceNodeByInput<NodeWithDocumentOutput>(this.node, this.node.inputs[this.inputIndex])
        return nodeWithDocumentOutput?.documentWidget || null;
    }
}
export class LayerInput extends SDPPPInput {
    get documentWidget() {
        const nodeWithLayerOutput = findSourceNodeByInput<NodeWithLayerOutput>(this.node, this.node.inputs[this.inputIndex])
        return nodeWithLayerOutput?.documentWidget || null;
    }
}


export function findSourceNodeByInput<T>(node: any, input: any): T | null {
    if (!node.graph.links[input.link]) return null;
    let fromNodeID = node.graph.links[input.link].origin_id;
    let fromNode = node.graph.getNodeById(fromNodeID);
    while (fromNode.type == 'Reroute') {
        fromNodeID = node.graph.links[fromNode.inputs[0].link].origin_id;
        fromNode = node.graph.getNodeById(fromNodeID);
    }
    return SDPPPNode.nodeMap.get(fromNode) as T
}
