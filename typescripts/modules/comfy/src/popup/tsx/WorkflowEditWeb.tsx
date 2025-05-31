import React from "react"
import WorkflowEdit from "../../../../../src/common/WorkflowEdit"
import { setWidgetValue } from "../../graph-to-form.mjs";
import { NumberWidget } from "./widgets/number";
import { ComboWidget } from "./widgets/combo";
import { ToggleWidget } from "./widgets/toggle";
import { StringWidget } from "./widgets/string";
import i18n from "../../../../../src/common/i18n.mts";
import { ConfigProvider, Input } from "antd";
import { EditableTitle } from "./widgets/EditableTitle";
import { ComfySocket } from "../../socket/ComfySocket.mts";
import { ImageWidget } from "./widgets/image_mask_path";
import { WidgetTableStructure, WidgetTableStructureNode, WidgetTableValue } from "../../../../../src/types/sdppp";
import { pageStore } from "photoshopModels.mjs";
declare const app: any;
const api = (window as any).comfyAPI.api.api;
export class WorkflowEditWrap extends React.Component<{
}, {
    widgetTableStructure: WidgetTableStructure,
    widgetTableValue: WidgetTableValue,
    widgetTableErrors: Record<string, string>,
    comfyStatus: {
        sid: string,
        ssid: string,
        progress: number,
        queueSize: number,
        lastError: string,
        executingNodeTitle: string,
    },
}> {
    state = {
        comfyStatus: {
            sid: '',
            ssid: '',
            progress: 0,
            queueSize: 0,
            lastError: '',
            executingNodeTitle: '',
        },
        widgetTableStructure: pageStore.data.widgetTableStructure,
        widgetTableValue: pageStore.data.widgetTableValue,
        widgetTableErrors: pageStore.data.widgetTableErrors,
    }

    private eventListeners: { event: string; handler: (e: any) => void }[] = [];
    private unsubscribes: (() => void)[] = [];

    constructor(props: any) {
        super(props)

        const addListener = (event: string, handler: (e: any) => void) => {
            api.addEventListener(event, handler);
            this.eventListeners.push({ event, handler });
        };

        addListener("progress", ({ detail }: { detail: { value: number, max: number } }) => {
            if (!detail || isNaN(detail.value / detail.max)) return;
            const progress = Math.round((detail.value / detail.max) * 100);
            this.setState({
                comfyStatus: {
                    ...this.state.comfyStatus,
                    progress: progress
                }
            });
        });

        addListener("status", (e: any) => {
            if (!e.detail?.exec_info) return;
            this.setState({
                comfyStatus: {
                    ...this.state.comfyStatus,
                    queueSize: e.detail.exec_info.queue_remaining
                }
            });
        });

        addListener("execution_error", ({ detail }: { detail: { exception_message: string } }) => {
            this.setState({
                comfyStatus: {
                    ...this.state.comfyStatus,
                    lastError: detail.exception_message,
                    executingNodeTitle: ''
                }
            });
        });

        addListener("execution_start", () => {
            this.setState({
                comfyStatus: {
                    ...this.state.comfyStatus,
                    lastError: '',
                    progress: 0,
                    executingNodeTitle: ''
                }
            });
        });

        addListener("executing", (e: any) => {
            const executingNodeID = e.detail
            const node = app.graph.nodes.find((n: any) => n.id == executingNodeID)
            if (node)
                this.setState({
                    comfyStatus: {
                        ...this.state.comfyStatus,
                        executingNodeTitle: node.title
                    }
                });
        })

        addListener("execution_success", () => {
            this.setState({
                comfyStatus: {
                    ...this.state.comfyStatus,
                    progress: 0,
                    executingNodeTitle: ''
                }
            });
        });

        addListener("execution_interrupted", () => {
            this.setState({
                comfyStatus: {
                    ...this.state.comfyStatus,
                    progress: 0,
                    executingNodeTitle: ''
                }
            });
        });

        const structureCallback = (wtStructure: WidgetTableStructure) => {
            this.setState({
                widgetTableStructure: wtStructure
            })
        }
        pageStore.subscribe('/widgetTableStructure', structureCallback)
        const valueCallback = (wtValue: WidgetTableValue) => {
            this.setState({
                widgetTableValue: wtValue
            })
        }
        pageStore.subscribe('/widgetTableValue', valueCallback)
        const errorsCallback = (wtErrors: Record<string, string>) => {
            this.setState({
                widgetTableErrors: wtErrors
            })
        }
        pageStore.subscribe('/widgetTableErrors', errorsCallback)
        this.unsubscribes.push(() => {
            pageStore.unsubscribe(structureCallback)
            pageStore.unsubscribe(valueCallback)
            pageStore.unsubscribe(errorsCallback)
        })
    }

    componentWillUnmount(): void {
        this.eventListeners.forEach(({ event, handler }) => {
            api.removeEventListener(event, handler);
        });
        this.unsubscribes.forEach((unsubscribe) => unsubscribe())
    }

    render() {
        const editProps = {
            widgetTableStructure: this.state.widgetTableStructure,
            widgetTableValue: this.state.widgetTableValue,
            widgetTableErrors: this.state.widgetTableErrors,
            // comfyStatus: {
            //     sid: this.state.comfyStatus.sid,
            //     ssid: this.state.comfyStatus.ssid,
            //     progress: this.state.comfyStatus.progress,
            //     queueSize: this.state.comfyStatus.queueSize,
            //     lastError: this.state.comfyStatus.lastError,
            //     executingNodeTitle: this.state.comfyStatus.executingNodeTitle,
            // },
            onWidgetChange: async (nodeid: number, widgetIndex: number, value: any, fieldInfo: WidgetTableStructureNode) => {
                const node = app.graph.nodes.find((n: any) => n.id == nodeid);
                if (!node) return;
                setWidgetValue(node, widgetIndex, value);
                // },
                // onRun: async (size: number = 1) => {
                //     for (let i = 0; i < size; i++)
                //         app.queuePrompt();
                // },
                // onSave: async () => {
                //     const workflowManager = app.workflowManager || app.extensionManager.workflow
                //     const workflow = workflowManager.activeWorkflow
                //     workflow.changeTracker.checkState()
                //     await workflowManager.saveWorkflow(workflow);
            },
            onWidgetRender: (context: {
                keepRender: boolean;
                result: any[];
            }, fieldInfo: WidgetTableStructureNode, widget: WidgetTableStructureNode['widgets'][0], widgetIndex: number) => {
                if (widget.outputType === 'number') {
                    const min = widget.options?.min ?? 0;
                    const max = widget.options?.max ?? 100;
                    const step = widget.options?.step ?? 1;

                    context.result.push(
                        <NumberWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            inputMin={min}
                            inputMax={max}
                            inputStep={step}
                            name={widget.name}
                            value={parseFloat(this.state.widgetTableValue[fieldInfo.id][widgetIndex])}
                            onValueChange={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                            extraOptions={this.state.widgetTableStructure.extraOptions}
                        />)
                    return true
                } else if (widget.outputType === 'combo') {
                    context.result.push(
                        <ComboWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            options={widget.options?.values || []}
                            name={widget.name}
                            onSelectUpdate={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                            value={this.state.widgetTableValue[fieldInfo.id][widgetIndex]}
                            extraOptions={this.state.widgetTableStructure.extraOptions}
                        />
                    )
                    return true
                } else if (widget.outputType === 'toggle') {
                    context.result.push(
                        <ToggleWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            name={widget.name}
                            value={this.state.widgetTableValue[fieldInfo.id][widgetIndex]}
                            onValueChange={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                            extraOptions={this.state.widgetTableStructure.extraOptions}
                        />
                    )
                    return true

                } else if (widget.outputType === 'string' || widget.outputType === 'customtext' || widget.outputType === 'text') {
                    context.result.push(
                        <StringWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            value={this.state.widgetTableValue[fieldInfo.id][widgetIndex]}
                            onValueChange={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                            extraOptions={this.state.widgetTableStructure.extraOptions}
                        />
                    )
                    return true
                } else if (widget.outputType === 'PS_LAYER' || widget.outputType === 'PS_DOCUMENT') {
                    context.result.push(<p>{i18n('only supported in Photoshop')}</p>)
                    return true
                } else if (widget.outputType == 'IMAGE_PATH' || widget.outputType == 'MASK_PATH') {
                    context.result.push(
                        <ImageWidget
                            uiWeight={widget.uiWeight || 12}
                            value={this.state.widgetTableValue[fieldInfo.id][widgetIndex]}
                            options={widget.options?.values || []}
                            key={widgetIndex}
                            onValueChange={async (v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                            nodeID={fieldInfo.id}
                            extraOptions={this.state.widgetTableStructure.extraOptions}
                        />
                    );
                    return true;
                }
                return true
            },
            onTitleRender: (title: string, fieldInfo: WidgetTableStructureNode) => {
                return <EditableTitle
                    title={title}
                    onTitleChange={(newTitle) => {
                        ComfySocket.instance.setNodeTitle({
                            node_id: fieldInfo.id,
                            title: newTitle
                        })
                    }}
                />;
            }
        }

        const fontSize = 12
        return <ConfigProvider theme={{
            components: {
                Input: {
                    fontSize: fontSize,
                    colorBgContainer: 'var(--p-form-field-background)',
                    colorText: 'var(--p-form-field-color)',
                    colorBorder: 'var(--p-form-field-border-color)'
                },
                Select: {
                    fontSize: fontSize,
                    colorBgContainer: 'var(--p-form-field-background)',
                    colorText: 'var(--p-form-field-color)',
                    colorBorder: 'var(--p-form-field-border-color)',
                    colorBgElevated: 'var(--p-form-field-background)',
                    colorTextDescription: 'var(--p-form-field-color)',
                    controlItemBgActive: 'var(--p-form-field-background)',
                    controlItemBgHover: 'var(--p-form-field-border-color)'
                },
                Checkbox: {
                    fontSize: fontSize,
                    colorText: 'var(--p-form-field-color)',
                },
                Radio: {
                    fontSize: fontSize,
                },
                Slider: {
                    fontSize: fontSize,
                },
                Switch: {
                    fontSize: fontSize,
                    colorBgContainer: 'var(--p-form-field-background)',
                    colorText: 'var(--p-form-field-color)'
                },
                InputNumber: {
                    fontSize: fontSize,
                    colorBgContainer: 'var(--p-form-field-background)',
                    colorText: 'var(--p-form-field-color)',
                    colorBorder: 'var(--p-form-field-border-color)'
                }
            }
        }}>
            <WorkflowEdit {...editProps} />
        </ConfigProvider>
    }
}
