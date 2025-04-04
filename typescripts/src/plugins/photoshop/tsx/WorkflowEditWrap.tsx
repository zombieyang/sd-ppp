import { useCallback, useMemo } from "react"
import i18n from "../../../common/i18n.mjs"
import LivePaintingIcon from "../../common/tsx/icons/LivePaintingIcon"
import PlayIcon from "../../common/tsx/icons/PlayIcon"
import PlayMultiIcon from "../../common/tsx/icons/PlayMultiIcon"
import RefreshIcon from "../../common/tsx/icons/RefreshIcon"
import SaveIcon from "../../common/tsx/icons/SaveIcon"
import WebEditIcon from "../../common/tsx/icons/WebEditIcon"
import {
    useSDPPPComfyCaller,
    useSDPPPContext,
    useAgentState,
} from "./SDPPPInternalBridge"

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
const SaveButtons = () => {
    const { workflowAgentSID } = useSDPPPContext();
    const { saveWorkflow, reopenWorkflow } = useSDPPPComfyCaller();

    const onSave = useCallback(async () => {
        await saveWorkflow(workflowAgentSID);
    }, [saveWorkflow, workflowAgentSID]);

    const onReopen = useCallback(() => {
        reopenWorkflow(workflowAgentSID);
    }, [reopenWorkflow, workflowAgentSID]);

    return (
        <div className="workflow-edit-button-line-left">
            <sp-action-button onClick={onSave}>
                <SaveIcon />
            </sp-action-button>
            <sp-action-button onClick={onReopen}>
                <RefreshIcon />
            </sp-action-button>
        </div>
    );
};

// 自动运行和多次运行按钮组
const AutoRunButtons = () => {
    const { workflowAgentSID, autoRunning, setAutoRunning } = useSDPPPContext();
    const { runPage } = useSDPPPComfyCaller();

    return (
        <div className="workflow-edit-button-line-right">
            <sp-action-button className={autoRunning?.value == workflowAgentSID ? 'highlight' : ''} onClick={() => {
                if (autoRunning?.value == workflowAgentSID) {
                    setAutoRunning(null);
                } else {
                    setAutoRunning({
                        type: 'page',
                        value: workflowAgentSID
                    });
                }
            }}>
                <LivePaintingIcon />
            </sp-action-button>
            {!autoRunning ? <sp-action-button onClick={() => { runPage(workflowAgentSID, 10) }}>
                <PlayMultiIcon count={10} />
            </sp-action-button> : ''}
            {!autoRunning ? <sp-action-button onClick={() => { runPage(workflowAgentSID, 3) }}>
                <PlayMultiIcon count={3} />
            </sp-action-button> : ''}
        </div>
    );
};

// 编辑按钮
const EditButton = () => {
    const { workflowAgentSID, webviewAgentSID, showWebviewDialog } = useSDPPPContext();
    const usingWebview = workflowAgentSID == webviewAgentSID;

    return (
        <sp-action-button
            {...(!usingWebview ? { disabled: true } : {})}
            onClick={() => { showWebviewDialog() }}
            title={!usingWebview ? i18n('disabled when running in browser page') : i18n('Edit in ComfyUI')}
        >
            <WebEditIcon />
        </sp-action-button>
    );
};

// 运行按钮
const RunButton = () => {
    const { workflowAgentSID } = useSDPPPContext();
    const { runPage } = useSDPPPComfyCaller();
    
    return (
        <div className="workflow-edit-controls-right">
            <sp-action-button onClick={() => { runPage(workflowAgentSID) }}>
                <PlayIcon />
            </sp-action-button>
        </div>
    );
};

export function WorkflowEditWrap({
    WorkflowEditPhotoshop
}: {
    WorkflowEditPhotoshop: any,
}) {
    const { workflowAgentSID } = useSDPPPContext();
    const { ssid, queueSize } = useAgentState(workflowAgentSID);

    return useMemo(() => {
        return (
            <div className="workflow-edit-wrap">
                <div className="workflow-edit-top">
                    <sp-label>{i18n('(Page ID: {0})Queue: {1}', ssid, queueSize)}</sp-label>
                    <div className="workflow-edit-controls">
                        <div className="workflow-edit-controls-left">
                            <div className="workflow-edit-button-line workflow-edit-button-lineone">
                                <SaveButtons />
                                <AutoRunButtons />
                            </div>
                            <div className="workflow-edit-button-line workflow-edit-controls-linetwo">
                                <WorkflowStatus />
                                <EditButton />
                            </div>
                        </div>
                        <RunButton />
                    </div>
                </div>
                <sp-divider></sp-divider>
                <WorkflowEditPhotoshop />
            </div>
        );
    }, [ssid, queueSize]);
}
