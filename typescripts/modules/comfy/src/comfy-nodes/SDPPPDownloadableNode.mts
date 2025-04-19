import { isPhotoshopConnected } from "../util.mts";
import { DownloadWidget } from "../litegraph/fe-widgets.mjs";
import { SDPPPNode } from "./SDPPPNode.mjs";
import i18n from "../../../../src/common/i18n.mts";

export class SDPPPDownloadableNode extends SDPPPNode {

    protected downloadWidget: any;
    constructor(node: any) {
        super(node);
        if (!this.downloadWidget)
            this.downloadWidget = new DownloadWidget(this.node);
    }
    protected onConfigure(nodeData: any): void {
        super.onConfigure(nodeData);
    }
    onDrawForeground(ctx: any) {
        if (this.node.flags.collapsed) return;

        if (!isPhotoshopConnected()) {
            ctx.save();
            ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
            ctx.fillRect(0, 0, this.node.size[0], this.node.size[1]);
            ctx.fillStyle = "white";
            ctx.textAlign = "center"
            ctx.fillText(i18n("Photoshop Disconnected!"), this.node.size[0] / 2, 5);
            ctx.restore();
        }
    }

    protected async update() {
        this.downloadWidget?.update();
    }
}