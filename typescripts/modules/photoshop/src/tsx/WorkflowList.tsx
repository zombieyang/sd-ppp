import React from "react";
import i18n from "../../../../src/common/i18n.mjs";
import { SpecialWorkflowItem, DirectoryItem, WorkflowItem } from "./WorkflowListItem.js";
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
        workflowAgentSID,
    } = useSDPPPContext();

    const {
        runWorkflow,
        runPage
    } = useSDPPPComfyCaller();

    const {
        workflows,
        workflowsError,
        currentViewingDirectory,
        setCurrentViewingDirectory,
        showingList
    } = useSDPPPWorkflowList();

    let listReplacer = null;
    if (workflowsError)
        return <div className="workflow-list">
            <sp-label>{workflowsError}</sp-label>
        </div>

    return (
        <div className="workflow-list">
            <ul className="client-list">
                {
                    currentViewingDirectory ?
                        <DirectoryItem
                            key={currentViewingDirectory}
                            path="../"
                            dirname={currentViewingDirectory.slice(0, -1)}
                            onDirectorySet={(dirname: string) => {
                                setCurrentViewingDirectory(dirname)
                            }}
                        />
                        : null
                }
                {
                    showingList.map((item: { path: string, isDir: boolean }) => {
                        const path = item.path;
                        const workflow = workflows[path]
                        const checked = autoRunning?.value == path;
                        if (item.isDir) {
                            return (
                                <DirectoryItem
                                    key={path}
                                    path={path}
                                    dirname={currentViewingDirectory.slice(0, -1)}
                                    onDirectorySet={(dirname: string) => {
                                        setCurrentViewingDirectory(dirname)
                                    }}
                                />
                            )
                        }
                        return (
                            <WorkflowItem
                                setEditorMode={setEditorMode}
                                key={path}
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
            <sp-divider />
            <ul className="client-list">
                <SpecialWorkflowItem
                    setEditorMode={setEditorMode}
                    path={''}
                    title={i18n('### Active Workflow ###')}
                    onRun={async () => {
                        await runPage(workflowAgentSID);
                    }}
                />
                <SpecialWorkflowItem
                    setEditorMode={setEditorMode}
                    path={'sdppp://Sample_SDXL.json'}
                    title={i18n('### Example SDXL ###')}
                    onRun={async () => {
                        await runPage(workflowAgentSID);
                    }}
                />
            </ul>

            {autoRunning?.type == 'workflow' ? <sp-label class="autorun-desc">{i18n(`auto run workflow [{0}] after change..`, workflows[autoRunning?.value]?.path)}</sp-label> : ''}
        </div>
    );
};

export default WorkflowList;