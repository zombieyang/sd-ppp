import i18n from "../../../common/i18n.mjs";
import { SpeicialIDManager } from "../../../common/photoshop/specialLayer.mjs";
import { DocumentWidget, DownloadWidget, LayerWidget, SDPPPWidget } from "../litegraph/fe-widgets.mjs";
import { DocumentInput, LayerInput, SDPPPInput } from "./Inputs.mjs";
import { SDPPPDownloadableNode } from "./SDPPPDownloadableNode.mjs";

export class SDPPPNodeWithInput extends SDPPPDownloadableNode {
    get documentWidget() {
        const firstConnectedInput = this.inputs.find(input => {
            return input.connected && (
                input instanceof DocumentInput ||
                input instanceof LayerInput
            )
        });
        if (firstConnectedInput) return (firstConnectedInput as any).documentWidget;
        return this.widgets.find(widget => {
            return widget instanceof DocumentWidget
        }) as DocumentWidget;
    }

    protected inputs: SDPPPInput[] = [];
    protected widgets: SDPPPWidget[] = [];
    constructor(node: any) {
        super(node);
        let firstDocumentWidget: DocumentWidget | null = null;
        for (let i = 0; i < this.node.widgets?.length; i++) {
            const name = this.node.widgets[i].name
            if (!name || name == "sdppp") continue;
            const inputData = this.node.constructor.nodeData.input.required[name] || this.node.constructor.nodeData.input.optional[name];
            if (!inputData) continue;
            if (inputData[1].sdppp_type == 'DOCUMENT_nameid') {
                const dWidget = DocumentWidget.link(node, this.node.widgets[i])
                firstDocumentWidget = firstDocumentWidget || dWidget
                this.widgets.push(dWidget);
            }
            if (inputData[1].sdppp_type == 'LAYER_select') {
                this.node.widgets[i].type = 'combo'
                this.widgets.push(new LayerWidget(node, this.node.widgets[i], {
                    extraOptions: SpeicialIDManager.getSpecialLayerForGet()
                }));
            }
        }
        for (let i = 0; i < this.node.inputs?.length; i++) {
            const name = this.node.inputs[i].name
            const inputData = this.node.constructor.nodeData.input.required[name] || this.node.constructor.nodeData.input.optional[name];
            if (inputData[1].sdppp_type == 'DOCUMENT') {
                this.inputs.push(new DocumentInput(node, i));
            }
            if (inputData[1].sdppp_type == 'LAYER') {
                this.inputs.push(new LayerInput(node, i));
            }
        }
    }

    protected async update() {
        this.node.widgets?.forEach((widget: any) => {
            if (widget.label) return;
            try {
                widget.label = i18n(widget.name);
            } catch (e) {
                widget.label = widget.name;
            }
        });
        this.widgets?.forEach(widget => {
            widget.update();
        });
        this.inputs?.forEach(input => {
            input.update();
        });
        super.update();
    }
    protected inputConnectionChange(index: number, connected: boolean): void {
        super.inputConnectionChange(index, connected);
        this.inputs.forEach(sdpppInput => {
            if (sdpppInput.index == index) {
                sdpppInput.connected = connected;
                const newDocumentWidget = this.documentWidget;
                if (this.downloadWidget) {
                    this.downloadWidget.linkDocumentWidget(newDocumentWidget);
                }
                this.widgets.forEach(widget => {
                    if (widget instanceof LayerWidget || widget instanceof DownloadWidget) {
                        widget.linkDocumentWidget(newDocumentWidget);
                    }
                });
            }
        })
    }
}
