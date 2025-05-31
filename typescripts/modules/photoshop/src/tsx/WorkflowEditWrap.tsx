import { useCallback, useMemo, useState } from "react"
import i18n from "../../../../src/common/i18n.mjs"
import LivePaintingIcon from "./icons/LivePaintingIcon"
import PlayIcon from "./icons/PlayIcon"
import {
    useSDPPPComfyCaller,
    useSDPPPContext,
    useAgentState,
} from "./SDPPPInternalBridge"
import RefreshIcon from "./icons/RefreshIcon"
import SaveIcon from "./icons/SaveIcon"
import PlayMultiIcon from "./icons/PlayMultiIcon"
import WebEditIcon from "./icons/WebEditIcon"
import CrossIcon from "./icons/CrossIcon"
import StopIcon from "./icons/StopIcon"
import CancelIcon from "./icons/CancelIcon"
import { action } from "photoshop";

interface HoverableButtonProps {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

// 状态显示组件
const WorkflowStatus = () => {
    const { workflowAgentSID, autoRunning } = useSDPPPContext();
    const { lastError, progress, executingNodeTitle } = useAgentState(workflowAgentSID);

    return (
        <div className="workflow-run-status">
            {autoRunning ? <sp-label>{i18n('auto run workflow after change..')}</sp-label> : ''}
            {lastError ? <sp-label class="error-label">{lastError}</sp-label> : ''}
            {executingNodeTitle ? <>
                <sp-label>{`${progress}% ${executingNodeTitle}...`}</sp-label>
                <sp-progressbar value={progress / 100}></sp-progressbar>
            </> : ''}
        </div>
    );
};

// 保存和刷新按钮组
const SaveButton = ({
    onMouseEnter,
    onMouseLeave,
}: HoverableButtonProps) => {
    const { workflowAgentSID } = useSDPPPContext();
    const { saveWorkflow, reopenWorkflow } = useSDPPPComfyCaller();

    const onSave = useCallback(async () => {
        await saveWorkflow(workflowAgentSID);
    }, [saveWorkflow, workflowAgentSID]);

    return (
        <sp-action-button onClick={onSave} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <SaveIcon />
        </sp-action-button>
    );
};
const ClearButton = () => {
    const { workflowAgentSID } = useSDPPPContext();
    const { clearQueue } = useSDPPPComfyCaller();
    const onClear = useCallback(() => {
        clearQueue();
    }, [clearQueue]);

    return <sp-action-button onClick={onClear}>
        <CrossIcon />
    </sp-action-button>
}

const RebootButton = () => {
    const { workflowAgentSID } = useSDPPPContext();
    const { reboot } = useSDPPPComfyCaller();
    const onReboot = useCallback(() => {
        reboot();
    }, [reboot]);

    return <sp-action-button onClick={onReboot}>重启</sp-action-button>
}

const StopButton = () => {
    const { workflowAgentSID } = useSDPPPContext();
    const { interrupt } = useSDPPPComfyCaller();
    const onInterrupt = useCallback(() => {
        interrupt();
    }, [interrupt]);

    return <sp-action-button onClick={onInterrupt}>
        <StopIcon />
    </sp-action-button>
}
const StopAndCancelButton = ({
    onMouseEnter,
    onMouseLeave,
}: HoverableButtonProps) => {
    const { interrupt } = useSDPPPComfyCaller();
    const { clearQueue } = useSDPPPComfyCaller();
    const onClearAndInterrupt = useCallback(async () => {
        await clearQueue();
        await interrupt();
    }, [clearQueue, interrupt]);

    return <sp-action-button onClick={onClearAndInterrupt} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <CancelIcon />
    </sp-action-button>
}

const RefreshButton = ({
    onMouseEnter,
    onMouseLeave,
}: HoverableButtonProps) => {
    const { workflowAgentSID } = useSDPPPContext();
    const { reopenWorkflow } = useSDPPPComfyCaller();
    const onReopen = useCallback(() => {
        reopenWorkflow(workflowAgentSID);
    }, [reopenWorkflow, workflowAgentSID]);

    return <sp-action-button onClick={onReopen} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <RefreshIcon />
    </sp-action-button>
}

const PlayMultiButtons = () => {
    const { workflowAgentSID, autoRunning } = useSDPPPContext();
    const { runPage } = useSDPPPComfyCaller();

    return <>
        {!autoRunning ? <sp-action-button onClick={() => { runPage(workflowAgentSID, 10) }}>
            <PlayMultiIcon count={10} />
        </sp-action-button> : ''}
        {!autoRunning ? <sp-action-button onClick={() => { runPage(workflowAgentSID, 3) }}>
            <PlayMultiIcon count={3} />
        </sp-action-button> : ''}
    </>
}

// 自动运行按钮
const AutoRunButtons = ({
    onMouseEnter,
    onMouseLeave,
}: HoverableButtonProps) => {
    const { workflowAgentSID, autoRunning, setAutoRunning } = useSDPPPContext();

    return (
        <sp-action-button class={autoRunning?.value == workflowAgentSID ? 'highlight' : ''} onClick={() => {
            if (autoRunning?.value == workflowAgentSID) {
                setAutoRunning(null);
            } else {
                setAutoRunning({
                    type: 'page',
                    value: workflowAgentSID
                });
            }
        }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <LivePaintingIcon />
        </sp-action-button>
    );
};

// 编辑按钮
const EditButton = ({
    onMouseEnter,
    onMouseLeave,
}: HoverableButtonProps) => {
    const { workflowAgentSID, webviewAgentSID, toggleWebviewDialog } = useSDPPPContext();
    const usingWebview = workflowAgentSID == webviewAgentSID;

    return (
        <sp-action-button
            {...(!usingWebview ? { disabled: true } : {})}
            onClick={() => { toggleWebviewDialog() }}
            title={!usingWebview ? i18n('disabled when running in browser page') : i18n('Edit in ComfyUI')}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <WebEditIcon />
        </sp-action-button>
    );
};

// 运行按钮
const RunButton = ({
    onMouseEnter,
    onMouseLeave,
}: HoverableButtonProps) => {
    const { workflowAgentSID } = useSDPPPContext();
    const { runPage } = useSDPPPComfyCaller();

    return (
        <sp-action-button onClick={() => {
            runPage(workflowAgentSID);
        }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <PlayIcon />
        </sp-action-button>
    );
};
const RunMultiButtons = ({
    onMouseEnter,
    onMouseLeave,
}: HoverableButtonProps) => {
    const { workflowAgentSID } = useSDPPPContext();
    const { runPage } = useSDPPPComfyCaller();

    return (
        <>
            <div className="action-button" onClick={() => { runPage(workflowAgentSID, 2) }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>x2</div>
            <div className="action-button" onClick={() => { runPage(workflowAgentSID, 5) }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>x5</div>
            <div className="action-button" onClick={() => { runPage(workflowAgentSID, 9) }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>x9</div>
        </>
    )
}

// const TestButtons = () => {
//     const { interrupt, clearQueue, reboot } = useSDPPPComfyCaller();

//     return (
//         <sp-action-button onClick={() => { reboot() }}>
//             <StopIcon />
//         </sp-action-button>
//     )
// }

export function WorkflowEditWrap({
    WorkflowEditPhotoshop
}: {
    WorkflowEditPhotoshop: any,
}) {
    const { workflowAgentSID, autoRunning } = useSDPPPContext();
    const { ssid, queueSize } = useAgentState(workflowAgentSID);
    const { lastError, progress, executingNodeTitle } = useAgentState(workflowAgentSID);
    const [hoveringButton, setHoveringButton] = useState<string | null>(null);
    const tips = useMemo(() => {
        if (hoveringButton == 'save') {
            return i18n('Save workflow to ComfyUI');
        }
        if (hoveringButton == 'refresh') {
            return i18n('Reload workflow');
        }
        if (hoveringButton == 'stopAndCancel') {
            return i18n('Stop and cancel all');
        }
        if (hoveringButton == 'autoRun') {
            return autoRunning ? i18n('Stop auto run') : i18n('Start auto running after change');
        }
        if (hoveringButton == 'edit') {
            return i18n('Edit in ComfyUI');
        }
        if (hoveringButton == 'run') {
            return i18n('Run workflow');
        }
        if (hoveringButton == 'runMulti') {
            return i18n('Run workflow xN');
        }
        return '';
    }, [hoveringButton, i18n]);


    return useMemo(() => {
        return (
            <div className="workflow-edit-wrap">
                <div className="workflow-edit-top">
                    {/* <sp-label>{i18n('(Page ID: {0})Queue: {1}', ssid, queueSize)}</sp-label> */}
                    <div className="workflow-edit-controls">
                        <div className="workflow-edit-controls-left">
                            <div className="workflow-edit-button-line workflow-edit-button-lineone">
                                <div className="workflow-edit-button-line-left">
                                    <SaveButton
                                        onMouseEnter={() => setHoveringButton('save')}
                                        onMouseLeave={() => setHoveringButton(null)} />
                                    <RefreshButton 
                                        onMouseEnter={() => setHoveringButton('refresh')}
                                        onMouseLeave={() => setHoveringButton(null)} />
                                </div>
                                <div className="workflow-edit-button-line-right">
                                    <StopAndCancelButton 
                                        onMouseEnter={() => setHoveringButton('stopAndCancel')}
                                        onMouseLeave={() => setHoveringButton(null)} />
                                    <AutoRunButtons 
                                        onMouseEnter={() => setHoveringButton('autoRun')}
                                        onMouseLeave={() => setHoveringButton(null)} />
                                    {/* <PlayMultiButtons /> */}
                                </div>
                            </div>
                            <div className="workflow-edit-button-line workflow-edit-controls-linetwo">

                                <div className="workflow-run-status">
                                    {lastError ? <sp-label class="error-label">{lastError}</sp-label> : ''}
                                    {/* {executingNodeTitle ? <>
                                        <sp-label>{`${progress}% ${executingNodeTitle}...`}</sp-label>
                                        <sp-progressbar value={progress / 100}></sp-progressbar>
                                    </> : ''} */}
                                    {!lastError && !executingNodeTitle && autoRunning ? <sp-label>{i18n('auto run workflow after change..')}</sp-label> : ''}
                                    {!lastError && !executingNodeTitle && tips ? <sp-label>{tips}</sp-label> : ''}
                                </div>
                                {/* <TestButtons /> */}
                                <EditButton 
                                    onMouseEnter={() => setHoveringButton('edit')}
                                    onMouseLeave={() => setHoveringButton(null)} />
                            </div>
                        </div>
                        <div className="workflow-edit-controls-center">
                            <RunButton 
                                onMouseEnter={() => setHoveringButton('run')}
                                onMouseLeave={() => setHoveringButton(null)} />
                        </div>
                        <div className="workflow-edit-controls-right">
                            <RunMultiButtons 
                                onMouseEnter={() => setHoveringButton('runMulti')}
                                onMouseLeave={() => setHoveringButton(null)} />
                        </div>
                    </div>
                </div>
                <sp-divider></sp-divider>
                <WorkflowEditPhotoshop />
            </div>
        );
    }, [ssid, queueSize, hoveringButton, autoRunning, lastError, progress, executingNodeTitle, tips, WorkflowEditPhotoshop]);
}
