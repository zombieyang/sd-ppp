import React from "react";
import i18n from "../../../common/i18n.mjs";
import WorkflowListItem from "./WorkflowListItem";
import {
    useSDPPPComfyCaller, useAgentState,
    useSDPPPContext, useSDPPPWorkflowList
} from "./SDPPPInternalBridge.js";

interface WorkflowListProps {
    setEditorMode: (editorMode: boolean) => void
}

const WorkflowList: React.FC<WorkflowListProps> = ({ setEditorMode }) => {
    const {
        autoRunning,
        webviewAgentSID,
        workflowAgentSID,
    } = useSDPPPContext();

    const {
        runWorkflow,
    } = useSDPPPComfyCaller();

    const {
        workflows,
        workflowsError,
        currentViewingDirectory,
        setCurrentViewingDirectory,
        showingList
    } = useSDPPPWorkflowList();

    const {
        ssid,
        lastError,
        progress,
        executingNodeTitle,
        queueSize,
    } = useAgentState(workflowAgentSID);

    let statusText = '';
    let queueText = ' ';
    let hasLastError = false;
    if (workflowAgentSID) {
        if (lastError) {
            statusText += i18n('Error: {0}', lastError);
            hasLastError = true;
        } else if (progress) {
            statusText += `(${progress}% - ${executingNodeTitle}...)`;
        } else if (workflowAgentSID) {
            if (workflowAgentSID == webviewAgentSID) {
                statusText += i18n('workflow running by hidden webview');
            } else {
                statusText += i18n('using browser page [{0}] for workflow running', ssid);
            }
        }
        queueText += `(${i18n('Queue:')} ${queueSize})`;
    }

    let listReplacer = null;
    if (workflowsError)
        listReplacer = <sp-label class="list-error-label">{workflowsError}</sp-label>

    return (
        <>
            <div className="client-list-title">
                <h3>{i18n('workflows')}{queueText}</h3>
                <sp-label class={hasLastError ? 'error-label' : ''}>{statusText}</sp-label>
            </div>
            {listReplacer ||
                <ul className="client-list">
                    {
                        currentViewingDirectory ?
                            <WorkflowListItem
                                setEditorMode={setEditorMode}
                                key={currentViewingDirectory}
                                path="../"
                                isDir={true}
                                isChecked={false}
                                onRun={async (path: string) => { }}
                                dirname={currentViewingDirectory.slice(0, -1)}
                                onDirectorySet={(dirname) => {
                                    setCurrentViewingDirectory(dirname)
                                }}
                            />
                            : ''
                    }
                    {
                        showingList.map((item: { path: string, isDir: boolean }) => {
                            const path = item.path;
                            const workflow = workflows[path]
                            const checked = autoRunning?.value == path;
                            if (item.isDir) {
                                return (
                                    <WorkflowListItem
                                        setEditorMode={setEditorMode}
                                        key={path}
                                        path={path}
                                        isDir={true}
                                        isChecked={false}
                                        onRun={async (path: string) => {
                                            await runWorkflow(path);
                                        }}
                                        dirname={currentViewingDirectory.slice(0, -1)}
                                        onDirectorySet={(dirname) => {
                                            setCurrentViewingDirectory(dirname)
                                        }}
                                    />
                                )
                            }
                            return (
                                <WorkflowListItem
                                    setEditorMode={setEditorMode}
                                    key={path}
                                    path={path}
                                    isDir={false}
                                    isChecked={checked}
                                    workflow={workflow}
                                    onRun={async (path: string) => {
                                        await runWorkflow(path);
                                    }}
                                />
                            )
                        })
                    }
                </ul>
            }
            {autoRunning?.type == 'workflow' ? <sp-label class="autorun-desc">{i18n(`auto run workflow [{0}] after change..`, workflows[autoRunning?.value]?.path)}</sp-label> : ''}
        </>
    );
};

export default WorkflowList;