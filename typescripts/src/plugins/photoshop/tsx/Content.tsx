// @ts-ignore
import { ComfyLogin } from "./SDPPPInternalBridge.js";
import { useSDPPPContext } from "./SDPPPInternalBridge.js";
import i18n, { isValidI18nKey } from "../../../common/i18n.mjs";
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
    const [initAfter4s, setInitAfter4s] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setInitAfter4s(true);
        }, 4000);
        return () => clearTimeout(timeout);
    }, []);

    const {
        workflowAgentSID,
        webviewAgentSID,
        lastConnectErrorMessage,

        showWebviewDialog,

    } = useSDPPPContext();

    const editorCardShowingIndex = editorMode ? 1 : 0;

    useEffect(() => {
        if (!workflowAgentSID && !webviewAgentSID) {
            setEditorMode(false);
        }
    }, [workflowAgentSID, webviewAgentSID]);
    return (
        <>
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
            {!editorMode && (initAfter4s || webviewAgentSID) && <ComfyLogin
                onRequestLogin={() => { showWebviewDialog() }}
            />}

            <sp-divider size="small"></sp-divider>

            {
                connectState === "connected" &&
                    <div className="panel-body">
                        <div className="editor-card" style={editorCardShowingIndex === 0 ? {} : { display: 'none' }}>
                            <div className="comfy-list-wrap">
                                {initAfter4s && !webviewAgentSID && <sp-label class="error-label">{i18n('hidden webview load failed: {0}, please select a browser page to continue', i18n('timeout'))}</sp-label>}
                                <WebPageList />
                                {workflowAgentSID && <WorkflowList setEditorMode={setEditorMode} />}
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


