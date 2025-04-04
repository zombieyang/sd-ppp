import React, { ReactNode, useMemo } from "react";
import i18n from "../../../common/i18n.mjs";

import type { SDPPPGraphForm } from "../../../common/types.js";
import { DropdownWidget } from "./EditWidgets/DropdownWidget.js";
import { PrimitiveNumberWidget } from "./EditWidgets/PrimitiveNumberWidget.js";
import { PrimitiveStringWidget } from "./EditWidgets/PrimitiveStringWidget.js";
import { PrimitiveToggleWidget } from "./EditWidgets/PrimitiveToggleWidget.js";
import { computeUIWeightCSS, useTraceUpdate } from "../../../common/tsx/util.mjs";

interface WorkflowEditProps {
    formDatas: SDPPPGraphForm[];

    onWidgetRender?: (context: {
        keepRender: boolean;
        result: any[];
    }, fieldInfo: SDPPPGraphForm, widget: SDPPPGraphForm['widgets'][0], widgetIndex: number) => boolean;
    onTitleRender?: (title: string, fieldInfo: SDPPPGraphForm) => ReactNode;

    onWidgetChange: (nodeID: number, widgetIndex: number, value: any, originNodeData: SDPPPGraphForm) => void;
}

export default function WorkflowEdit({
    formDatas: allFields,
    onWidgetRender,
    onWidgetChange,
    onTitleRender
}: WorkflowEditProps) {
    const allRenderedFields = useMemo(() => {
        return allFields.map(fieldInfo => {
            const reduceWidgetRender = (context: {
                keepRender: boolean;
                result: any[];
            }, widget: SDPPPGraphForm['widgets'][0], widgetIndex: number) => {
                if (!context.keepRender) return context;

                if (widget.outputType === 'error') {
                    context.result.push(<span className="list-error-label">{widget.value}</span>)
                    return context;

                } else if (onWidgetRender?.(context, fieldInfo, widget, widgetIndex)) {
                } else if (widget.outputType === 'number') {
                    const min = widget.options?.min ?? 0;
                    const max = widget.options?.max ?? 100;
                    const step = widget.options?.step ?? 1;

                    context.result.push(
                        <PrimitiveNumberWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            inputMin={min}
                            inputMax={max}
                            inputStep={step}
                            value={parseFloat(widget.value)}
                            onValueChange={(v) => {
                                onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                        />)
                } else if (widget.outputType === 'combo') {
                    context.result.push(
                        <DropdownWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            options={widget.options?.values || []}
                            onSelectUpdate={(v) => {
                                onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                            value={widget.value}
                        />
                    )
                } else if (widget.outputType === 'toggle') {
                    context.result.push(
                        <PrimitiveToggleWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            name={widget.name}
                            value={widget.value}
                            onValueChange={(v) => {
                                onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                        />
                    )

                } else {
                    context.result.push(
                        <PrimitiveStringWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            value={widget.value}
                            onValueChange={(v) => {
                                onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                        />
                    )
                }
                return context;
            }
            return (
                <div className="workflow-edit-field" key={fieldInfo.id}>
                    <div className="workflow-edit-field-title" title={fieldInfo.title} style={{
                        ...computeUIWeightCSS(fieldInfo.uiWeightSum <= 8 && fieldInfo.widgets.length == 1 ? 4 : 12)
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
                </div>
            )
        })
    }, [allFields, onWidgetRender, onWidgetChange, onTitleRender])

    return (
        <>
            {
                !allFields?.length ?
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

