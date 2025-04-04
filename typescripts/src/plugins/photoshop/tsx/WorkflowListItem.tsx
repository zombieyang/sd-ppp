import React from "react";
import ActionButton from "../../common/tsx/ActionButton";
import EditIcon from "../../common/tsx/icons/EditIcon";
import FolderIcon from "../../common/tsx/icons/FolderIcon";
import LivePaintingIcon from "../../common/tsx/icons/LivePaintingIcon";
import PlayIcon from "../../common/tsx/icons/PlayIcon";
import { useSDPPPContext, useSDPPPComfyCaller } from "./SDPPPInternalBridge.js";

interface WorkflowListItemProps {
    path: string
    isDir: boolean
    isChecked: boolean
    workflow?: {
        path: string
        error: string
    }

    onRun: (path: string) => Promise<void>,
    dirname?: string,
    onDirectorySet?: (path: string) => void,
    setEditorMode: (editorMode: boolean) => void
}

const WorkflowListItem: React.FC<WorkflowListItemProps> = ({
    path,
    isDir,
    isChecked,
    workflow,
    onRun,
    dirname,
    onDirectorySet,
    setEditorMode
}) => {
    const {
        setAutoRunning,
        workflowAgentSID
    } = useSDPPPContext();
    const {
        openWorkflow
    } = useSDPPPComfyCaller();

    if (isDir) {
        return (
            <li className="client-list-item">
                <sp-label class="client-list-item-left" onClick={() => {
                    if (path == '../') {
                        const directoryWithoutSuffix = dirname || ''
                        const lastSlashIndex = directoryWithoutSuffix.lastIndexOf('/')
                        if (lastSlashIndex == -1) {
                            onDirectorySet?.('')
                        } else {
                            onDirectorySet?.(directoryWithoutSuffix.slice(0, lastSlashIndex))
                        }
                    } else {
                        onDirectorySet?.(path)
                    }
                }}>
                    <FolderIcon size={0.6} />
                    <div>{path}</div>
                </sp-label>
            </li>
        );
    }

    if (!workflow) return null;

    return (
        <li className={"client-list-item" + (isChecked ? ' checked' : '')}>
            <sp-label class="client-list-item-left" onClick={() => {
                setEditorMode(true)
                openWorkflow(workflowAgentSID, workflow.path, true)
            }}>
                <div>
                    {workflow.error ? workflow.error.replace('sdppp PS side error:', '') : workflow.path}
                </div>
            </sp-label>
            <div className="client-list-item-right">
                <div className="tips-icon">
                    <EditIcon size={0.6} onClick={() => {
                        setEditorMode(true)
                        openWorkflow(workflowAgentSID, workflow.path, true)
                    }} />
                </div>
                <ActionButton onClick={() => {
                    if (!isChecked) {
                        setAutoRunning({ type: 'workflow', value: path })
                    } else {
                        setAutoRunning(null)
                    }
                }}>
                    <LivePaintingIcon size={0.6} />
                </ActionButton>
                <ActionButton onClick={() => { onRun(workflow.path) }}>
                    <PlayIcon size={0.6} />
                </ActionButton>
            </div>
        </li>
    );
}

export default WorkflowListItem;
