import { ComfySocket } from "../socket/ComfySocket.mjs";
import { DocumentWidget, LayerWidget } from "../litegraph/fe-widgets.mjs";
import { DocumentInput, NodeWithDocumentOutput, NodeWithLayerOutput } from "./Inputs.mjs";
import { SDPPPDownloadableNode } from "./SDPPPDownloadableNode.mjs";
import { SDPPPNodeWithInput } from "./SDPPPNodeWithInput.mjs";
import i18n from "../../../../src/common/i18n.mts";
import { pagePhotoshopStoreMap, pageStore } from "photoshopModels.mjs";
import { findDocumentNodeRecursive } from "src/util.mjs";

export class GetLayerNode extends SDPPPNodeWithInput implements NodeWithLayerOutput {
    get documentWidget() {
        return (this.inputs[0] as DocumentInput)?.documentWidget;
    }

    async update() {
        super.update();
        this.node.inputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.outputs.forEach((i: any) => i.label = i18n(i.name));
    }
}
export class GetSelectionNode extends SDPPPNodeWithInput {
    async update() {
        super.update();
        this.node.inputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.outputs.forEach((i: any) => i.label = i18n(i.name));
    }
}
export class ParseLayerInfoNode extends SDPPPNodeWithInput {
    async update() {
        super.update();
        this.node.inputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.outputs.forEach((i: any) => i.label = i18n(i.name));
    }
}
export class GetLayersInGroupNode extends SDPPPNodeWithInput implements NodeWithLayerOutput {
    get documentWidget() {
        return (this.inputs[0] as DocumentInput)?.documentWidget;
    }
    async update() {
        super.update();
        this.node.inputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.outputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.widgets[0].label = i18n(this.node.widgets[0].name)
    }
}
export class GetLinkedLayersNode extends SDPPPNodeWithInput implements NodeWithLayerOutput {
    get documentWidget() {
        return (this.inputs[0] as DocumentInput)?.documentWidget;
    }
    async update() {
        super.update();
        this.node.inputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.outputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.widgets[0].label = i18n(this.node.widgets[0].name)
    }
}

export class SendTextToLayerNode extends SDPPPDownloadableNode {
    protected async update() {
        super.update();
        this.node.inputs[0].label = i18n(this.node.inputs[0].name)
        this.node.inputs[1].label = i18n(this.node.inputs[1].name)
        this.node.outputs[0] && (this.node.outputs[0].label = i18n(this.node.outputs[0].name))
    }
}
export class GetTextFromLayerNode extends SDPPPDownloadableNode {
    static prehandleNodeType(nodeData: any) {
        if (nodeData.input.optional['document']) {
            delete nodeData.input.optional['document'];
        }
    }
    async update() {
        super.update();
        this.node.inputs[0].label = i18n(this.node.inputs[0].name)
        this.node.outputs[0] && (this.node.outputs[0].label = i18n(this.node.outputs[0].name))
    }
}

export class GetDocumentNode extends SDPPPNodeWithInput implements NodeWithDocumentOutput {
    get documentWidget() {
        return this.sdpppWidgets[0] as DocumentWidget;
    }
    protected psdWidget: any

    public extractPSD(sid: string, documentIdentify: string) {
        if (this.node.properties.psd) {
            ComfySocket.instance
                .exportPSDDataURLToPhotoshop(sid, documentIdentify, this.node.properties['psd'], pageStore.data.ssid)
                .then(async () => {
                    await new Promise(resolve => setTimeout(resolve, 300));
                    (globalThis as any).app.canvas.draw(true, true)
                })
                .catch(console.error);
        }
    }

    constructor(node: any) {
        super(node);
        this.psdWidget = node.addWidget('button', '', '', () => {
            if (!this.documentWidget.widget.value) return;
            const backendDatas = pagePhotoshopStoreMap.getAllPhotoshopDocumentData();
            let [instanceName, documentIdentify] = this.documentWidget.widget.value.split('/');
            if (this.node.properties.psd) {
                this.extractPSD(backendDatas[instanceName].sid, documentIdentify);

            } else {
                ComfySocket.instance
                    .importPSDDataURLFromPhotoshop(backendDatas[instanceName].sid, documentIdentify, pageStore.data.ssid)
                    .then(psdBase64 => {
                        this.node.setProperty('psd', psdBase64);
                    });
            }
        }, {})
    }

    async update() {
        super.update();
        this.node.outputs.forEach((i: any) => i.label = i18n(i.name));
        if (this.node.properties.psd) {
            pageStore.setHasPSDNodes(true)
            this.psdWidget.label = i18n('extract saved .psd to Photoshop')

        } else {
            pageStore.setHasPSDNodes(false)
            this.psdWidget.label = i18n('save .psd to this workflow')
        }
    }
}

export class RunPhotoshopActionNode extends SDPPPNodeWithInput {
    async update() {
        super.update();

        this.node.inputs.forEach((i: any) => i.label = i18n(i.name));
        this.node.outputs.forEach((i: any) => i.label = i18n(i.name));

        let options = []
        if (this.documentWidget) {
            const store = this.documentWidget.getPSStore()
            if (store) {
                options = store.actions
            }
        }

        this.node.widgets[0].options.values = options;
        (this.node.constructor as any).nodeData.input.required.action[0] = options
    }
}
