import i18n from "../../common/i18n.mts";
import { sdpppX } from "../../common/sdpppX.mts";
import { SDPPPGraphForm } from "../../common/types";

const customNodeConvertersByWildcard: [string, NodeConverter][] = [];

sdpppX.widgetable = sdpppX.widgetable || {};
sdpppX.widgetable.add = function (name: string, fn: NodeConverter) {
    customNodeConvertersByWildcard.push([name, fn]);
}

// Define a type for the converter function
type NodeConverter = (node: any) => SDPPPGraphForm | null;

// // Create an array of tuples with [RegExp, converter function]
// const customNodeConverters: [RegExp, NodeConverter][] = [
//     [/^LoadImage$/, (node: any) => ({
//         id: node.id,
//         title: node.title,
//         widgets: [{
//             value: node.widgets[0].value, 
//             outputType: "IMAGE"
//         }]
//     })],
//     [/^LoadImageMask$/, (node: any) => ({
//         id: node.id,
//         title: node.title,
//         widgets: [{
//             value: node.widgets[0].value,
//             outputType: "MASK"
//         }]
//     })],
//     [/^SDPPP Get Layer By ID$/, (node: any) => ({
//         id: node.id,
//         title: node.title,
//         widgets: [{
//             value: node.widgets[0].value,
//             outputType: "LAYER"
//         }]
//     })],
//     [/^SDPPP Get Document$/, (node: any) => ({
//         id: node.id,
//         title: node.title,
//         widgets: [{
//             value: node.widgets[0].value,
//             outputType: "DOCUMENT"
//         }]
//     })],
//     [/\(rgthree\)/, (node: any) => ({
//         id: node.id,
//         title: node.title,
//         widgets: node.widgets.map((widget: any) => ({
//             value: widget.value,
//             name: node.type.indexOf('Group') != -1 ? (widget.label || widget.name) : '',
//             outputType: widget.type || "toggle",
//             options: widget.options
//         }))
//     })],
//     [/^PrimitiveNode$/, (node: any) => {
//         let title = node.title.startsWith("Primitive") ? nameByTitleOrConnectedOutput(node) : node.title;
//         if (!node.widgets || node.widgets.length == 0) {
//             return null;
//         }
//         let widgets = node.widgets.slice(0, 2)
//             .map((widget: any, index: number) => ({
//                 value: widget.value,
//                 name: widget.label || widget.name,
//                 outputType: widget.type || "string",
//                 options: (widget.options),
//                 uiWeight: index == 0 ? 8 : 4
//             }))
//         if (widgets[0].outputType == "number") {
//             let isStepRangeTooBig = ((widgets[0].options.max - widgets[0].options.min) / widgets[0].options.step) > 1000;
//             if (!isStepRangeTooBig) {
//                 widgets = widgets.slice(0, 1);
//             }
//         }
//         return {
//             id: node.id,
//             title: title,
//             widgets
//         }
//     }]
// ];

function nameByTitleOrConnectedOutput(node: any) {
    return node.outputs?.[0].widget?.name || node.title;
}

export function findAvailableNodeInGraph(graph: any): SDPPPGraphForm[] {
    return graph.nodes
        .map((node: any) => {
            if (node.mode != 0) return; // muted or by passed
            if (!node.title || node.title.startsWith(".")) return; // hidden
            if (!node.widgets || node.widgets.length == 0) return; // no widgets

            const converter = customNodeConvertersByWildcard.find(([wildcard]) => {
                return wildcardMatch(wildcard, node.type);
            });
            if (converter) {
                try {
                    const converted = converter[1](node);
                    if (converted) {
                        converted.id = node.id;
                        converted.uiWeightSum = converted.widgets.reduce((sum: number, widget: any) => sum + (widget.uiWeight || 12), 0);
                        return converted;
                    }
                } catch (e: any) {
                    return {
                        id: node.id,
                        title: node.title,
                        uiWeightSum: 12,
                        widgets: [{
                            outputType: 'error',
                            value: i18n('convert widget {0} failed:', converter[0]) + (e.message || e || '') + (e?.stack || '')
                        }]
                    }
                }
            }

            // generic node 
            //only use the nodes starts with #
            if (!node.title.startsWith("#")) {
                return null;
            }

            let title = node.title;
            let widgets = node.widgets;
            return {
                id: node.id,
                title: title,
                uiWeightSum: widgets.reduce((sum: number, widget: any) => sum + (widget.uiWeight || 12), 0),
                widgets: widgets.map((widget: any) => ({
                    value: widget.value,
                    name: widget.label || widget.name,
                    outputType: widget.type || "string",
                    options: widget.options
                }))
            };
        })
        .filter(Boolean)
        .sort((a: SDPPPGraphForm, b: SDPPPGraphForm) => {
            return a.title.localeCompare(b.title);
        });
}


function wildcardMatch(pattern: string, text: string): boolean {
    // Convert wildcard pattern to regex pattern
    const regexPattern = pattern
        .replace(/[.+^${}()|[\]\\]/g, '\\$&') // Escape regex special chars except * and ?
        .replace(/\*/g, '.*')                  // * matches any sequence
        .replace(/\?/g, '.');                  // ? matches any single character

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(text);
}
