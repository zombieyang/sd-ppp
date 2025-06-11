import { useSDPPPContext, Promote, Auths } from "./SDPPPInternalBridge.js";
import i18n, { isValidI18nKey } from "../../../../src/common/i18n.mjs";
import WorkflowList from "./WorkflowList.js";
import { useEffect, useState } from "react";
import { WorkflowEditWrap } from "./WorkflowEditWrap.js";
import type { AddressBarType, WorkflowEditPhotoshopType } from "./SDPPPInternalBridge.js";
import { sdpppX } from "../../../../src/common/sdpppX.mjs";

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
            <div className="header-container">
                <div className="connect-box">
                    { 
                        sdpppX.logo ? <img src={sdpppX.logo} alt="logo"
                            style={{ width: '28px', height: '28px', cursor: 'pointer', marginRight: '2px' }}
                            title={i18n('Back to workflow list')}
                            onClick={() => {
                                setEditorMode(false);
                            }}
                        /> : (
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
                        )
                    }
                    <AddressBar />
                </div>
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

            {/* <Auths /> */}

            {
                connectState === "connected" &&
                <div className="panel-body">
                    <div className="editor-card" style={editorCardShowingIndex === 0 ? {} : { display: 'none' }}>
                        <div className="comfy-list-wrap">
                            {/* <WebPageList /> */}
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


