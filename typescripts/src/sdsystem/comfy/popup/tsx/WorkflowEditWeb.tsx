import React from "react"
import WorkflowEdit from "../../../../plugins/common/tsx/WorkflowEdit"
import { SDPPPGraphForm } from "../../../../common/types";
import { findAvailableNodeInGraph } from "../../graph-to-form.mjs";
import { NumberWidget } from "./widgets/number";
import { ComboWidget } from "./widgets/combo";
import { ToggleWidget } from "./widgets/toggle";
import { StringWidget } from "./widgets/string";
import i18n from "../../../../common/i18n.mts";
import { ConfigProvider, Input } from "antd";
import { EditableTitle } from "./widgets/EditableTitle";
import { ComfySocket } from "../../socket/ComfySocket.mts";
import { ImageWidget } from "./widgets/image_mask_path";

declare const app: any;
const api = (window as any).comfyAPI.api.api;
export class WorkflowEditWrap extends React.Component<{
}, {
    comfyStatus: {
        sid: string,
        ssid: string,
        progress: number,
        queueSize: number,
        lastError: string,
        executingNodeTitle: string,
    },
    formDatas: SDPPPGraphForm[]
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
        formDatas: []
    }

    private eventListeners: { event: string; handler: (e: any) => void }[] = [];

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

        addListener("graphChanged", () => {
            this.setState({
                formDatas: findAvailableNodeInGraph(app.graph)
            });
        })
        let lastWorkflowPath = ''
        const checkCurrentWorkflowName = () => {
            requestAnimationFrame(checkCurrentWorkflowName)
            const workflowManager = app.workflowManager || app.extensionManager.workflow
            const currentWorkflowPath = workflowManager.activeWorkflow?.path
            if (currentWorkflowPath != lastWorkflowPath) {
                lastWorkflowPath = currentWorkflowPath
                app.graph && this.setState({
                    formDatas: findAvailableNodeInGraph(app.graph)
                });
            }
        }
        requestAnimationFrame(checkCurrentWorkflowName)

        const formDatas = findAvailableNodeInGraph(app.graph)
        //@ts-ignore
        this.state.formDatas = formDatas
    }

    componentWillUnmount(): void {
        this.eventListeners.forEach(({ event, handler }) => {
            api.removeEventListener(event, handler);
        });
    }

    render() {
        const editProps = {
            formDatas: this.state.formDatas,
            // comfyStatus: {
            //     sid: this.state.comfyStatus.sid,
            //     ssid: this.state.comfyStatus.ssid,
            //     progress: this.state.comfyStatus.progress,
            //     queueSize: this.state.comfyStatus.queueSize,
            //     lastError: this.state.comfyStatus.lastError,
            //     executingNodeTitle: this.state.comfyStatus.executingNodeTitle,
            // },
            onWidgetChange: async (nodeid: number, widgetIndex: number, value: any, fieldInfo: SDPPPGraphForm) => {
                const node = app.graph.nodes.find((n: any) => n.id == nodeid);
                if (!node) return;
                node.widgets[widgetIndex].value = value;
                node.widgets[widgetIndex].callback(value)
                const workflowManager = app.workflowManager || app.extensionManager.workflow
                workflowManager.activeWorkflow?.changeTracker.checkState()
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
            }, fieldInfo: SDPPPGraphForm, widget: SDPPPGraphForm['widgets'][0], widgetIndex: number) => {
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
                            value={parseFloat(widget.value)}
                            onValueChange={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                        />)
                    return true
                } else if (widget.outputType === 'combo') {
                    context.result.push(
                        <ComboWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            options={widget.options?.values || []}
                            onSelectUpdate={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                            value={widget.value}
                        />
                    )
                    return true
                } else if (widget.outputType === 'toggle') {
                    context.result.push(
                        <ToggleWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            name={widget.name}
                            value={widget.value}
                            onValueChange={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                        />
                    )
                    return true

                } else if (widget.outputType === 'string' || widget.outputType === 'customtext') {
                    context.result.push(
                        <StringWidget
                            uiWeight={widget.uiWeight || 12}
                            key={widgetIndex}
                            value={widget.value}
                            onValueChange={(v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
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
                            value={widget.value}
                            options={widget.options?.values || []}
                            key={widgetIndex}
                            onValueChange={async (v) => {
                                editProps.onWidgetChange(fieldInfo.id, widgetIndex, v, fieldInfo);
                            }}
                        />
                    );
                    return true;
                }
                return true
            },
            onTitleRender: (title: string, fieldInfo: SDPPPGraphForm) => {
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
                    fontSize: fontSize
                },
                Select: {
                    fontSize: fontSize
                },
                Checkbox: {
                    fontSize: fontSize
                },
                Radio: {
                    fontSize: fontSize
                },
                Slider: {
                    fontSize: fontSize
                },
                Switch: {
                    fontSize: fontSize
                },
                InputNumber: {
                    fontSize: fontSize
                }

            }
        }}>
            <WorkflowEdit {...editProps} />
        </ConfigProvider>
    }
}
