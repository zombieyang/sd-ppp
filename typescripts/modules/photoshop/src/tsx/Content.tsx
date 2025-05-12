import { useSDPPPContext, Promote, Auths } from "./SDPPPInternalBridge.js";
import i18n, { isValidI18nKey } from "../../../../src/common/i18n.mjs";
import WebPageList from "./WebPageList.js";
import WorkflowList from "./WorkflowList.js";
import { useEffect, useState } from "react";
import { WorkflowEditWrap } from "./WorkflowEditWrap.js";
import type { AddressBarType, WorkflowEditPhotoshopType } from "./SDPPPInternalBridge.js";

export function Content({
    connectState,
    AddressBar,
    WorkflowEditPhotoshop,
}: {
    connectState: 'connected' | 'disconnected' | 'connecting',
    AddressBar: AddressBarType,
    WorkflowEditPhotoshop: WorkflowEditPhotoshopType,
}) {
    const [editorMode, setEditorMode] = useState(false);
    const [initAfter8s, setInitAfter8s] = useState(false);
    useEffect(() => {
        if (connectState === 'connected') {
            const timeout = setTimeout(() => {
                setInitAfter8s(true);
            }, 8000);
            return () => clearTimeout(timeout);
        } else {
            setInitAfter8s(false);
        }
    }, [connectState]);

    const {
        workflowAgentSID,
        webviewAgentSID,
        lastConnectErrorMessage,

    } = useSDPPPContext();

    const editorCardShowingIndex = editorMode ? 1 : 0;

    const [prevIsNotWebview, setPrevIsNotWebview] = useState(false);

    // when disconnect and the agent is not webview, set editor mode to false
    useEffect(() => {
        if (workflowAgentSID) {
            setPrevIsNotWebview(workflowAgentSID != webviewAgentSID);
        } else {
            if (prevIsNotWebview) {
                setEditorMode(false);
            }
        }
    }, [workflowAgentSID]);
    useEffect(() => {
        if (connectState === 'disconnected') {
            setEditorMode(false);
        }
    }, [connectState]);
    return (
        <>
            <Promote />
            <div className="connect-box">
                {
                    !editorMode ?
                        <div className={"status-bar " + connectState}>
                            <div className="status-icon" title={lastConnectErrorMessage?.toString() || i18n(connectState)}>⬤</div>
                        </div>
                        :
                        <sp-action-button
                            onClick={() => {
                                setEditorMode(false);
                            }}
                        >←</sp-action-button>
                }
                <AddressBar />
            </div>
            {
                lastConnectErrorMessage ? (
                    <div>
                        <sp-label class="error-label">
                            {isValidI18nKey(lastConnectErrorMessage) ? i18n(lastConnectErrorMessage as any) : lastConnectErrorMessage}
                        </sp-label>
                    </div>
                ) : ''
            }

            <Auths />

            <sp-divider size="small"></sp-divider>

            {
                connectState === "connected" &&
                <div className="panel-body">
                    <div className="editor-card" style={editorCardShowingIndex === 0 ? {} : { display: 'none' }}>
                        <div className="comfy-list-wrap">
                            {initAfter8s && !webviewAgentSID && <sp-label class="error-label">{i18n('hidden webview load failed: {0}, please select a browser page to continue', i18n('timeout'))}</sp-label>}
                            <WebPageList />
                            <WorkflowList setEditorMode={setEditorMode} />
                        </div>
                    </div>
                    <div className="editor-card" style={editorMode ? {} : { display: 'none' }}>
                        {editorMode && workflowAgentSID && <WorkflowEditWrap WorkflowEditPhotoshop={WorkflowEditPhotoshop} />}
                    </div>
                </div>
            }
        </>
    );
}


