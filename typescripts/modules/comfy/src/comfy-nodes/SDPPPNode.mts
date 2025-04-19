import { __GLOBAL_API_LEVEL__ } from "../../../../src/common/version.mts";

export abstract class SDPPPNode {
    static nodeMap: WeakMap<any, SDPPPNode> = new WeakMap();
    static registerNodeType(nodeType: any, nodeData: any, SDPPPNodeClass: new (node: any) => SDPPPNode) {
        // @ts-ignore
        if (SDPPPNodeClass.prehandleNodeType) SDPPPNodeClass.prehandleNodeType(nodeType.nodeData || nodeData);
        const onAdded = nodeType.prototype.onAdded;
        const onRemoved = nodeType.prototype.onRemoved;

        nodeType.prototype.onAdded = async function (...args: any[]) {
            if (onAdded) await onAdded.call(this, ...args);
            const sdpppNode = new SDPPPNodeClass(this);
            SDPPPNode.nodeMap.set(this, sdpppNode);
            await sdpppNode.update();
        }
        nodeType.prototype.onRemoved = async function (...args: any[]) {
            if (onRemoved) await onRemoved.call(this, ...args);
            const sdpppNode = SDPPPNode.nodeMap.get(this);
            SDPPPNode.nodeMap.delete(this);
            sdpppNode?.onDestroy();
        }
        nodeType.prototype.onDrawForeground = async function (ctx: CanvasRenderingContext2D) {
            const sdpppNode = SDPPPNode.nodeMap.get(this);
            sdpppNode?.onDrawForeground(ctx);
            await sdpppNode?.update();
        }
        nodeType.prototype.onConfigure = async function (...args: any[]) {
            const sdpppNode = SDPPPNode.nodeMap.get(this);
            sdpppNode?.onConfigure(args[0]);
            await sdpppNode?.update();
        }
        const onConnectionsChange = nodeType.prototype.onConnectionsChange;
        nodeType.prototype.onConnectionsChange = async function (type: number, index: number, connected: boolean, linkInfo: any) {
            const sdpppNode = SDPPPNode.nodeMap.get(this);
            if (type == 1) {
                sdpppNode?.inputConnectionChange(index, connected && linkInfo);
                await sdpppNode?.update();
            }
            if (type == 2) {
                sdpppNode?.outputConnectionChange(index, connected);
            }
            return onConnectionsChange?.apply(this, arguments);
        }
    }

    protected node: any;
    constructor(node: any) { this.node = node; }
    protected abstract update(): Promise<void>;
    protected inputConnectionChange(index: number, connected: boolean) { }
    protected outputConnectionChange(index: number, connected: boolean) { }
    protected onDrawForeground(ctx: CanvasRenderingContext2D) { }
    protected onDestroy() { }
    protected onConfigure(nodeData: any) {
        this.node.setProperty('sdppp-version', __GLOBAL_API_LEVEL__);
    }
}
