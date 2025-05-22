import React from "react";
import ActionButton from "./ActionButton.js";
import EditIcon from "./icons/EditIcon.js";
import FolderIcon from "./icons/FolderIcon.js";
import LivePaintingIcon from "./icons/LivePaintingIcon.js";
import PlayIcon from "./icons/PlayIcon.js";
import { useSDPPPContext, useSDPPPComfyCaller } from "./SDPPPInternalBridge.js";
import i18n from "../../../../src/common/i18n.mjs";

const ICON_SIZE = 0.6;
const CLASS_NAMES = {
    LIST_ITEM: "client-list-item",
    LIST_ITEM_LEFT: "client-list-item-left",
    LIST_ITEM_RIGHT: "client-list-item-right",
    TIPS_ICON: "tips-icon",
    CHECKED: "checked"
};

interface BaseListItemProps {
    isChecked?: boolean;
    children: React.ReactNode;
    rightContent?: React.ReactNode;
    onClick?: () => void;
}

const BaseListItem: React.FC<BaseListItemProps> = ({
    isChecked = false,
    children,
    rightContent,
    onClick
}) => {
    return (
        <li className={`${CLASS_NAMES.LIST_ITEM}${isChecked ? ` ${CLASS_NAMES.CHECKED}` : ''}`} onClick={onClick}>
            <sp-label className={CLASS_NAMES.LIST_ITEM_LEFT}>
                {children}
            </sp-label>
            {rightContent && (
                <div className={CLASS_NAMES.LIST_ITEM_RIGHT}>
                    {rightContent}
                </div>
            )}
        </li>
    );
};

interface DirectoryItemProps {
    path: string;
    dirname: string;
    onDirectorySet: (path: string) => void;
}

const DirectoryItem: React.FC<DirectoryItemProps> = ({
    path,
    dirname,
    onDirectorySet
}) => {
    const handleClick = () => {
        if (path === '../') {
            const directoryWithoutSuffix = dirname || '';
            const lastSlashIndex = directoryWithoutSuffix.lastIndexOf('/');
            // no slash anymore. or meet the protocol name
            if (lastSlashIndex === -1 || directoryWithoutSuffix[lastSlashIndex - 1] === '/') {
                onDirectorySet?.('');
            } else {
                onDirectorySet?.(directoryWithoutSuffix.slice(0, lastSlashIndex));
            }
        } else {
            onDirectorySet?.(path);
        }
    };

    return (
        <BaseListItem onClick={handleClick}>
            <FolderIcon size={ICON_SIZE} />
            <div style={{ marginLeft: 3 }}>{path.slice(0, -1).split('/').pop()}</div>
        </BaseListItem>
    );
};

interface WorkflowItemProps {
    isChecked: boolean;
    workflow: {
        path: string;
        error: string;
    };
    onRun: (path: string) => Promise<void>;
    setEditorMode: (editorMode: boolean) => void;
}

interface ActiveWorkflowItemProps {
    path: string | null;
    title: string;
    onRun: () => Promise<void>;
    setEditorMode: (editorMode: boolean) => void;
}

const WorkflowActions: React.FC<{
    isChecked?: boolean;
    onEdit: () => void;
    onAutoRun?: () => void;
    onRun: () => void;
}> = ({ isChecked, onEdit, onAutoRun, onRun }) => {
    return (
        <>
            <div className={CLASS_NAMES.TIPS_ICON}>
                <EditIcon size={ICON_SIZE} onClick={onEdit} />
            </div>
            {onAutoRun && (
                <ActionButton highlight={isChecked} onClick={onAutoRun}>
                    <LivePaintingIcon size={ICON_SIZE} />
                </ActionButton>
            )}
            <ActionButton onClick={onRun}>
                <PlayIcon size={ICON_SIZE} />
            </ActionButton>
        </>
    );
};

const WorkflowItem: React.FC<WorkflowItemProps> = ({
    isChecked,
    workflow,
    onRun,
    setEditorMode
}) => {
    const {
        setAutoRunning,
        workflowAgentSID
    } = useSDPPPContext();
    const {
        openWorkflow
    } = useSDPPPComfyCaller();

    const handleEditClick = () => {
        setEditorMode(true);
        openWorkflow(workflowAgentSID, workflow.path);
    };

    const handleAutoRunClick = () => {
        if (!isChecked) {
            setAutoRunning({ type: 'workflow', value: workflow.path });
        } else {
            setAutoRunning(null);
        }
    };
    
    return (
        <BaseListItem
            isChecked={isChecked}
            rightContent={
                <WorkflowActions
                    isChecked={isChecked}
                    onEdit={handleEditClick}
                    onAutoRun={handleAutoRunClick}
                    onRun={() => onRun(workflow.path)}
                />
            }
            onClick={handleEditClick}
        >
            {workflow.error ? workflow.error.replace('sdppp PS side error:', '') : workflow.path.split('/').pop()}
        </BaseListItem>
    );
};

const SpecialWorkflowItem: React.FC<ActiveWorkflowItemProps> = ({
    onRun,
    path,
    title,
    setEditorMode
}) => {
    const {
        openWorkflow
    } = useSDPPPComfyCaller();
    const {
        workflowAgentSID
    } = useSDPPPContext();

    const handleEditClick = async () => {
        path && await openWorkflow(workflowAgentSID, path);
        setEditorMode(true);
    };

    return (
        <BaseListItem
            rightContent={
                <WorkflowActions
                    onEdit={handleEditClick}
                    onRun={onRun}
                />
            }
            onClick={handleEditClick}
        >
            {title}
        </BaseListItem>
    );
};

export {
    DirectoryItem,
    WorkflowItem,
    SpecialWorkflowItem
};
