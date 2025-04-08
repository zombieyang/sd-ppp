import i18n from "../../common/i18n.mts";
import { sdpppX } from "../../common/sdpppX.mts";
import { SDPPPGraphForm } from "../../common/types";
import { app } from "./comfy-globals.mts";

// Define a type for the converter function
type NodeConverter = (node: any) => SDPPPGraphForm | null;
type WidgetValueSetter = (node: any, widgetIndex: any, value: any) => boolean;

const customNodeConvertersByWildcard: [string, {
    formatter: NodeConverter,
    setter: WidgetValueSetter | null
}][] = [];

sdpppX.widgetable = sdpppX.widgetable || {};
sdpppX.widgetable.add = function (name: string, fn: NodeConverter | {
    formatter: NodeConverter,
    setter: WidgetValueSetter
}) {
    if (typeof fn === 'function') {
        customNodeConvertersByWildcard.push([name, {
            formatter: fn,
            setter: null
        }]);
    } else {
        customNodeConvertersByWildcard.push([name, fn]);
    }
}


export function setWidgetValue(node: any, widgetIndex: any, value: any) {
    const converter = customNodeConvertersByWildcard.find(([wildcard]) => {
        return wildcardMatch(wildcard, node.type);
    });
    let setted = false;
    if (converter) {
        const setter = converter[1].setter;
        if (setter) {
            setted = !!setter(node, widgetIndex, value);
        }
    }
    if (!setted) {
        node.widgets[widgetIndex].value = value;
        node.widgets[widgetIndex].callback?.(value)
    }
    const workflowManager = app.workflowManager || app.extensionManager.workflow
    workflowManager.activeWorkflow?.changeTracker.checkState()
}

export function findAvailableNodeInGraph(graph: any): SDPPPGraphForm[] {
    return graph?.nodes
        .map((node: any) => {
            if (node.mode != 0) return; // muted or by passed
            if (!node.title || node.title.startsWith(".")) return; // hidden
            if (!node.widgets || node.widgets.length == 0) return; // no widgets

            const converter = customNodeConvertersByWildcard.find(([wildcard]) => {
                return wildcardMatch(wildcard, node.type);
            });
            if (converter) {
                try {
                    const converted = converter[1].formatter(node);
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
