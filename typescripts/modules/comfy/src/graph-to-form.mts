import { pageStore } from "photoshopModels.mjs";
import i18n from "../../../src/common/i18n.mts";
import { sdpppX } from "../../../src/common/sdpppX.mts";
import { WidgetTableStructure, WidgetTableStructureNode, WidgetTableValue } from "../../../src/types/sdppp";
import { app } from "./comfy-globals.mts";

// Define a type for the converter function
type NodeConverter = (node: any) => WidgetTableStructureNode | null;
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
    const defaultConverter = customNodeConvertersByWildcard.find(([wildcard]) => {
        return wildcard == '__DEFAULT__'
    })
    const converter = customNodeConvertersByWildcard.find(([wildcard]) => {
        return wildcardMatch(wildcard, node.type);
    }) || defaultConverter;
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

export function getWidgetTableValue(graph: any): WidgetTableValue {
    const ret: WidgetTableValue = {};
    const defaultConverter = customNodeConvertersByWildcard.find(([wildcard]) => {
        return wildcard == '__DEFAULT__'
    })

    graph
        .nodes
        .forEach((node: any) => {
            if (!node.widgets || node.widgets.length == 0) return; // no widgets
            const converter = customNodeConvertersByWildcard.find(([wildcard]) => {
                return wildcardMatch(wildcard, node.type);
            }) || defaultConverter;
            if (converter) {
                try {
                    const converted = converter[1].formatter(node);
                    if (converted) {
                        ret[node.id] = converted.widgets.map((widget: any) => widget.value);
                    }
                } catch (e: any) {
                    ret[node.id] = [];
                }
            }
        });
    return ret;
}

export function makeWidgetTableStructure(graph: any, activeWorkflow: any): WidgetTableStructure {
    if (!graph) return {
        widgetTableID: '',
        widgetTablePath: '',
        widgetTablePersisted: false,
        groups: {},
        nodes: {},
        nodeIndexes: [],
        extraOptions: {
            useSliderForNumberWidget: pageStore.data.useSliderForNumberWidget
        }
    };
    const groups: WidgetTableStructure['groups'] = graph
        .groups
        .map((group: any) => {
            group.recomputeInsideNodes();
            return {
                id: group.id,
                name: group.title,
                color: group.color,
                nodeIDs: group.nodes.map((node: any) => {
                    return node.id;
                })
            }
        });
    const nodes: WidgetTableStructureNode[] = graph
        .nodes
        .map((node: any) => {
            if (node.mode != 0) return; // muted or by passed
            const title = getTitle(node);
            if (!title || title.startsWith(".")) return; // hidden
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
                        title: title,
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
            if (!title.startsWith("#")) {
                return null;
            }

            let widgets = node.widgets;
            const defaultConverter = customNodeConvertersByWildcard.find(([wildcard]) => {
                return wildcard == '__DEFAULT__'
            })
            if (defaultConverter) {
                const converted = defaultConverter[1].formatter(node);
                if (converted) {
                    return Object.assign(converted, {
                        uiWeightSum: converted.widgets.reduce((sum: number, widget: any) => sum + (widget.uiWeight || 12), 0),
                    });
                }
            }
            const converted = {
                id: node.id,
                title: title,
                widgets: widgets.map((widget: any) => ({
                    name: widget.label || widget.name,
                    outputType: widget.type || "string",
                    value: widget.value,
                    options: widget.options
                }))
            };
            return Object.assign(converted, {
                uiWeightSum: converted.widgets.reduce((sum: number, widget: any) => sum + (widget.uiWeight || 12), 0),
            });
        })
        .filter(Boolean)
        .sort((a: WidgetTableStructureNode, b: WidgetTableStructureNode) => {
            let titleA = getTitle(a);
            let titleB = getTitle(b);
            titleA = titleA.startsWith("#") ? titleA.slice(1).trim() : titleA.trim();
            titleB = titleB.startsWith("#") ? titleB.slice(1).trim() : titleB.trim();
            return titleA.localeCompare(titleB);
        })

    return {
        widgetTablePath: activeWorkflow.activeState.extra['sdppp_workflow_alias'] || activeWorkflow.path,
        widgetTablePersisted: activeWorkflow.isPersisted,
        widgetTableID: activeWorkflow.activeState.id,
        groups,
        nodes: nodes.reduce((acc: Record<number, WidgetTableStructureNode>, node: WidgetTableStructureNode) => {
            acc[node.id] = node;
            return acc;
        }, {}),
        nodeIndexes: nodes.map((node: WidgetTableStructureNode) => node.id),
        extraOptions: {
            useSliderForNumberWidget: pageStore.data.useSliderForNumberWidget
        }
    }
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

/**
 * get the title of the node, with priority to avoid conflicts with the hidden property sdppp_widgetable_title
 * 获取节点的标题, 优先用于规避冲突的隐藏属性sdppp_widgetable_title
 * 
 * @param {*} node 
 * @returns 
 */
function getTitle(node: any, defaultTitle: string = '') {
    let retTitle = defaultTitle || node.title || '';
    if (node.setProperty && (retTitle.startsWith("#") || retTitle.startsWith("."))) {
        node.setProperty('sdppp_widgetable_title', retTitle);
    } else {
        retTitle = node.properties?.['sdppp_widgetable_title'] || retTitle;
    }
    return retTitle;
}
sdpppX.getNodeTitle = getTitle;