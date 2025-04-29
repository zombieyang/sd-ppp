import React, { ReactNode, useMemo } from "react";
import i18n from "./i18n.mjs";

import type { WidgetTableStructure, WidgetTableStructureNode, WidgetTableValue } from "../types/sdppp/index.js";
import { computeUIWeightCSS, useTraceUpdate } from "./tsx/util.js";

interface WorkflowEditProps {
    widgetTableStructure: WidgetTableStructure;
    widgetTableValue: WidgetTableValue;
    widgetTableErrors: Record<number, string>;

    onWidgetRender?: (context: {
        keepRender: boolean;
        result: any[];
    }, fieldInfo: WidgetTableStructureNode, widget: WidgetTableStructureNode['widgets'][0], widgetIndex: number) => boolean;
    onTitleRender?: (title: string, fieldInfo: WidgetTableStructureNode) => ReactNode;

    onWidgetChange: (nodeID: number, widgetIndex: number, value: any, originNodeData: WidgetTableStructureNode) => void;
}

export default function WorkflowEdit({
    widgetTableStructure,
    widgetTableValue,
    widgetTableErrors,
    onWidgetRender,
    onWidgetChange,
    onTitleRender
}: WorkflowEditProps) {
    const allRenderedFields = useMemo(() => {
        return widgetTableStructure.nodeIndexes.map(nodeID => {
            const fieldInfo = widgetTableStructure.nodes[nodeID]
            const reduceWidgetRender = (context: {
                keepRender: boolean;
                result: any[];
            }, widget: WidgetTableStructureNode['widgets'][0], widgetIndex: number) => {
                if (!context.keepRender) return context;

                if (widget.outputType === 'error') {
                    context.result.push(<span className="list-error-label">{widgetTableValue[fieldInfo.id][widgetIndex]}</span>)
                    return context;

                } else if (onWidgetRender?.(context, fieldInfo, widget, widgetIndex)) {
                }
                return context;
            }
            const group = Object.values(widgetTableStructure.groups).find(group => group.nodeIDs.includes(fieldInfo.id))
            const groupColor = group?.color || 'rgba(127, 127, 127, .4)'

            const useShortTitle = fieldInfo.uiWeightSum <= 8 && fieldInfo.widgets.length == 1 && (
                fieldInfo.widgets[0].outputType !== 'number' ||
                !widgetTableStructure.extraOptions?.useSliderForNumberWidget
            )
            return (
                <div className="workflow-edit-field" key={fieldInfo.id}>
                    <div className="workflow-edit-field-title" title={fieldInfo.title} style={{
                        ...computeUIWeightCSS(useShortTitle ? 4 : 12),
                        borderColor: groupColor
                    }}>
                        {onTitleRender ?
                            onTitleRender(fieldInfo.title, fieldInfo) :
                            <span>{fieldInfo.title}</span>
                        }
                    </div>
                    {
                        fieldInfo.widgets.reduce(reduceWidgetRender, {
                            keepRender: true,
                            result: [] as any[]
                        }).result.map((item: ReactNode, index: number) => {
                            return <WidgetRenderErrorBoundary key={index}>{item}</WidgetRenderErrorBoundary>
                        })
                    }
                    {
                        widgetTableErrors[fieldInfo.id] ?
                            <span className="list-error-label">{widgetTableErrors[fieldInfo.id]}</span> : ''
                    }
                </div>
            )
        })
    }, [widgetTableStructure, widgetTableValue, widgetTableErrors, onWidgetRender, onWidgetChange, onTitleRender])

    const nodeErrorsNotInWidgetTable = useMemo(() => {
        return Object.keys(widgetTableErrors).filter((key: any) => !widgetTableStructure.nodes[parseInt(key)]);
    }, [widgetTableErrors, widgetTableStructure]);

    return (
        <>
            {
                nodeErrorsNotInWidgetTable.length > 0 &&
                nodeErrorsNotInWidgetTable.map((key: any) => (
                    <span key={key} className="list-error-label">{widgetTableErrors[key]}</span>
                ))
            }
            {
                !Object.keys(widgetTableStructure.nodes).length ?
                    (<span className="list-error-label">{i18n('no suitable node to control in this workflow')}</span>) : ''
            }
            <div className="workflow-edit-content">
                {
                    allRenderedFields
                }
            </div>
        </>
    );
}


class WidgetRenderErrorBoundary extends React.Component<{
    children: React.ReactNode;
}, {
    hasError: boolean;
    error: Error | null;
}> {
    constructor(props: {
        children: React.ReactNode;
    }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ hasError: true, error });
    }

    render() {
        if (this.state.hasError) {
            return <span className="list-error-label">{this.state.error?.stack || this.state.error?.message || this.state.error?.toString()}</span>
        }
        return this.props.children;
    }
}

