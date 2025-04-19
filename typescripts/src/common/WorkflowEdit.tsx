import React, { ReactNode, useMemo } from "react";
import i18n from "./i18n.mjs";

import type { SDPPPGraphForm } from "../types/sdppp/index.js";
import { computeUIWeightCSS, useTraceUpdate } from "./tsx/util.js";

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

