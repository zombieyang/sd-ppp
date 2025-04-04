import i18n from "../../../common/i18n.mjs";
import { pagePhotoshopStoreMap, pageStore } from "../../common/models/photoshopModels.mjs";
import { ComfySocket } from "../socket/ComfySocket.mjs";
import { DocumentWidget, LayerWidget } from "../litegraph/fe-widgets.mjs";
import { DocumentInput, NodeWithDocumentOutput, NodeWithLayerOutput } from "./Inputs.mjs";
import { SDPPPDownloadableNode } from "./SDPPPDownloadableNode.mjs";
import { SDPPPNodeWithInput } from "./SDPPPNodeWithInput.mjs";

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
    }
}
export class GetTextFromLayerNode extends SDPPPDownloadableNode {
    static prehandleNodeType(nodeData: any) {
        if (nodeData.input.optional['document']) {
            delete nodeData.input.optional['document'];
        }
    }
    private documentWidget: DocumentWidget;
    private layerWidget: LayerWidget;
    protected async update() {
        this.documentWidget?.lockMode(this.layerConnected, i18n('document linked'))
        this.layerWidget?.lockMode(this.layerConnected, i18n('layer linked'))
        this.documentWidget.update();
        this.layerWidget.update();
        super.update();
        if (!this.node.widgets[0].label)
            this.node.widgets[0].label = i18n(this.node.widgets[0].name)
        if (!this.node.widgets[1].label)
            this.node.widgets[1].label = i18n(this.node.widgets[1].name)
        this.node.inputs[0].label = i18n(this.node.inputs[0].name)
        this.node.outputs[0].label = i18n(this.node.outputs[0].name)
    }
    constructor(node: any) {
        const documentWidget = DocumentWidget.create(node, 'document')
        const layerWidget = LayerWidget.create(node, 'layer_or_group', {
            documentWidgetInNode: documentWidget,
            extraOptions: []
        });
        super(node);
        this.documentWidget = documentWidget
        this.layerWidget = layerWidget
    }
    protected layerConnected: boolean = false;
    protected inputConnectionChange(index: number, connected: boolean) {
        super.inputConnectionChange(index, connected);
        if (index == 0) {
            this.layerConnected = connected;
        }
    }
}

// export class SDPPPSettingsNode extends SDPPPNodeWithInput {
//     async update() {
//         super.update();
//         this.node.inputs[0].label = i18n(this.node.inputs[0].name)
//         if (this.node.properties.psd) {
//             pageStore.setHasPSDNodes(true)
//             this.psdWidget.label = i18n('extract saved .psd to Photoshop')

//         } else {
//             pageStore.setHasPSDNodes(false)
//             this.psdWidget.label = i18n('save .psd to this workflow')
//         }
//     }

//     protected onDestroy(): void {
//         pageStore.setHasPSDNodes(false)
//     }

//     protected psdWidget: any
//     constructor(node: any) {
//         const existed = app.graph.nodes.filter((n: any) => n.comfyClass == 'SDPPP Settings')
//         if (existed.length > 1) {
//             alert(i18n('You can only have one SDPPP Settings node in a workflow'))
//             app.graph.remove(node)
//             throw new Error(i18n('You can only have one SDPPP Settings node in a workflow'))
//         }
//         super(node);
//         this.psdWidget = node.addWidget('button', '', '', () => {
//             const backendDatas = pagePhotoshopStoreMap.getAllPhotoshopDocumentData();
//             const [instanceName, documentIdentify] = this.documentWidget.widget.value.split('/');
//             if (this.node.properties.psd) {
//                 this.extractPSD(backendDatas[instanceName].sid, documentIdentify)

//             } else {
//                 ComfySocket.instance
//                     .importPSDDataURLFromPhotoshop(backendDatas[instanceName].sid, documentIdentify)
//                     .then(psdBase64 => {
//                         this.node.setProperty('psd', psdBase64);
//                     });
//             }
//         }, {})
//     }

//     public extractPSD(sid: string, documentIdentify: string) {
//         if (this.node.properties.psd) {
//             ComfySocket.instance
//                 .exportPSDDataURLToPhotoshop(sid, documentIdentify, this.node.properties['psd'])
//                 .then(async () => {
//                     await new Promise(resolve => setTimeout(resolve, 300));
//                     (globalThis as any).app.canvas.draw(true, true)
//                 })
//                 .catch(console.error);
//         }
//     }
// }

export class GetDocumentNode extends SDPPPNodeWithInput implements NodeWithDocumentOutput {
    get documentWidget() {
        return this.widgets[0] as DocumentWidget;
    }
    protected psdWidget: any

    public extractPSD(sid: string, documentIdentify: string) {
        if (this.node.properties.psd) {
            ComfySocket.instance.exportPSDDataURLToPhotoshop(sid, documentIdentify, this.node.properties['psd'])
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
                ComfySocket.instance.importPSDDataURLFromPhotoshop(backendDatas[instanceName].sid, documentIdentify)
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