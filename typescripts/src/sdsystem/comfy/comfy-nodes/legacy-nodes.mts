import i18n from "../../../common/i18n.mjs";
import { SpeicialIDManager } from "../../../common/photoshop/specialLayer.mjs";
import { DocumentWidget, LayerWidget } from "../litegraph/fe-widgets.mjs";
import { ComfyNodeDefList } from "../litegraph/node-wrapper.mjs";
import { GetSelectionNode } from "./nodes.mjs";
import { SDPPPDownloadableNode } from "./SDPPPDownloadableNode.mjs";
declare const comfyAPI: any;

export class GetImageFromLayerNode extends SDPPPDownloadableNode {
    static prehandleNodeType(nodeData: any) {
        if (nodeData.input.optional['document']) {
            delete nodeData.input.optional['document'];
        }
    }
    private documentWidget: DocumentWidget;
    private layerWidget: LayerWidget;
    constructor(node: any) {
        const documentWidget = DocumentWidget.create(node, 'document')
        const layerWidget = LayerWidget.create(node, 'layer_or_group', {
            documentWidgetInNode: documentWidget,
            extraOptions: SpeicialIDManager.getSpecialLayerForGet()
        });
        super(node);
        this.documentWidget = documentWidget
        this.layerWidget = layerWidget

        this.node.widgets[0] = documentWidget.widget
        this.node.widgets[1] = layerWidget.widget

    }
    protected onConfigure(nodeData: any): void {
        if (!nodeData.properties['sdppp-version']) {

        } else if (+nodeData.properties['sdppp-version'] <= 410) {

            if (this.node.widgets[0].value === true || this.node.widgets[0].value === "true") {

                const getSelectionNode = comfyAPI.app.app.addNodeOnGraph(ComfyNodeDefList['SDPPP Get Selection'], {
                    pos: this.node.pos,
                });
                new GetSelectionNode(getSelectionNode);

                if (this.node.outputs[0].links?.length) {
                    comfyAPI.app.app.addNodeOnGraph(ComfyNodeDefList['JoinImageWithAlpha'], {
                        pos: [this.node.pos[0] + getSelectionNode.size[0] + 10, this.node.pos[1] - 20],
                    });

                } else {
                    getSelectionNode.size = this.node.size;
                }

                ; (comfyAPI as any).app.app.graph.remove(this.node)
            }

            this.node.widgets[0].value = nodeData.widgets_values[1];
            this.node.widgets[1].value = nodeData.widgets_values[2];
        }
        super.onConfigure(nodeData);
    }

    protected async update() {
        this.documentWidget.lockMode(this.layerLinked, i18n('document linked'))
        this.layerWidget.lockMode(this.layerLinked, i18n('layer linked'))

        this.documentWidget.update();
        this.layerWidget.update();
        super.update();
        if (!this.node.widgets[0].label)
            this.node.widgets[0].label = i18n(this.node.widgets[0].name)
        if (!this.node.widgets[1].label)
            this.node.widgets[1].label = i18n(this.node.widgets[1].name)
        this.node.inputs[0].label = i18n(this.node.inputs[0].name)
        this.node.inputs[1].label = i18n(this.node.inputs[1].name)
        this.node.outputs[0].label = i18n(this.node.outputs[0].name)
        this.node.outputs[1].label = i18n(this.node.outputs[1].name)
    }
    private layerLinked: boolean = false;
    protected inputConnectionChange(index: number, connected: boolean) {
        super.inputConnectionChange(index, connected);
        if (index == 0) this.layerLinked = connected;
    }
}
export class SendImageToLayerNode extends SDPPPDownloadableNode {
    static prehandleNodeType(nodeData: any) {
        if (nodeData.input.optional['document']) {
            delete nodeData.input.optional['document'];
        }
    }
    private documentWidget: DocumentWidget;
    private layerWidget: LayerWidget;

    constructor(node: any) {
        const documentWidget = DocumentWidget.create(node, 'document')
        const layerWidget = LayerWidget.create(node, 'layer_or_group', {
            documentWidgetInNode: documentWidget,
            extraOptions: SpeicialIDManager.getSpecialLayerForSend()
        });
        super(node);
        this.documentWidget = documentWidget
        this.layerWidget = layerWidget
    }
    protected async update() {
        this.documentWidget?.lockMode(this.layerLinked, i18n('document linked'))
        this.layerWidget?.lockMode(this.layerLinked, i18n('layer linked'))

        this.documentWidget.update();
        this.layerWidget.update();
        super.update();
        if (!this.node.widgets[0].label)
            this.node.widgets[0].label = i18n(this.node.widgets[0].name)
        if (!this.node.widgets[1].label)
            this.node.widgets[1].label = i18n(this.node.widgets[1].name)
        this.node.inputs[0].label = i18n(this.node.inputs[0].name)
        this.node.inputs[1].label = i18n(this.node.inputs[1].name)
        this.node.inputs[2].label = i18n(this.node.inputs[2].name)
    }
    private layerLinked: boolean = false;
    protected inputConnectionChange(index: number, connected: boolean) {
        super.inputConnectionChange(index, connected);
        if (index == 1) this.layerLinked = connected;
    }
}