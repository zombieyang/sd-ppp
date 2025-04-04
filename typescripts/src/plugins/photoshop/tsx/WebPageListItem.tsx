import React from "react";
import ActionButton from "../../common/tsx/ActionButton";
import AgentIcon from "../../common/tsx/icons/AgentIcon";
import LivePaintingIcon from "../../common/tsx/icons/LivePaintingIcon";
import PlayIcon from "../../common/tsx/icons/PlayIcon";
import { useSDPPPContext, useSDPPPComfyCaller, SDPPPWebpageInstance } from "./SDPPPInternalBridge";

interface WebPageListItemProps {
    pageInstance: SDPPPWebpageInstance
}

const WebPageListItem: React.FC<WebPageListItemProps> = ({
    pageInstance
}) => {
    const {
        autoRunning,
        setAutoRunning,
        workflowAgentSID,
        setWorkflowAgentSID,
    } = useSDPPPContext();
    const { runPage } = useSDPPPComfyCaller();

    const isWorkflowAgent = workflowAgentSID == pageInstance.sid;
    const isAutoRunning = autoRunning?.value == pageInstance.sid;

    return (
        <li className={`client-list-item${isWorkflowAgent ? ' show-tips' : ''}${isWorkflowAgent || isAutoRunning ? ' checked' : ''}`}>
            <sp-label class="client-list-item-left" onClick={() => {
                setWorkflowAgentSID(isWorkflowAgent ? '' : pageInstance.sid)
            }}>
                <div>[{pageInstance.ssid}] {pageInstance.lastError ? pageInstance.lastError?.replace('sdppp PS side error:', '') : pageInstance.title}</div>
            </sp-label>
            <div className="client-list-item-right">
                <div className="tips-icon">
                    <AgentIcon size={0.6} onClick={() => {
                        setWorkflowAgentSID(isWorkflowAgent ? '' : pageInstance.sid)
                    }} />
                </div>
                <ActionButton highlight={isAutoRunning} onClick={() => {
                    setAutoRunning(isAutoRunning ? null : { type: 'page', value: pageInstance.sid })
                }}>
                    <LivePaintingIcon size={0.6} />
                </ActionButton>
                <ActionButton onClick={() => { runPage(pageInstance.sid) }}>
                    <PlayIcon size={0.6} />
                </ActionButton>
            </div>
        </li>
    );
}

export default WebPageListItem;
