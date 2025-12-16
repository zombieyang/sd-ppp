import {
  useSDPPPContext,
  Promote,
  useSDPPPComfyCaller,
} from "./SDPPPInternalBridge.js";
import i18n, { isValidI18nKey } from "../../../../src/common/i18n.mjs";
import WorkflowList from "./WorkflowList.js";
import { useEffect, useState } from "react";
import { WorkflowEditWrap } from "./WorkflowEditWrap.js";
import type {
  AddressBarType,
  WorkflowEditPhotoshopType,
} from "./SDPPPInternalBridge.js";
import { sdpppX } from "../../../../src/common/sdpppX.mjs";
import CogIcon from "./icons/CogIcon.js";
import PlayIcon from "./icons/PlayIcon.js";
import MinimalStandalone from "./MinimalStandalone.js";

export function Content({
  connectState,
  AddressBar,
  WorkflowEditPhotoshop,
}: {
  connectState: "connected" | "disconnected" | "connecting";
  AddressBar: AddressBarType;
  WorkflowEditPhotoshop: WorkflowEditPhotoshopType;
}) {
  const [editorMode, setEditorMode] = useState(false);
  const [minimalMode, setMinimalMode] = useState(false);

  const { workflowAgentSID, webviewAgentSID, lastConnectErrorMessage } =
    useSDPPPContext();
  const { runPage } = useSDPPPComfyCaller();

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
    if (connectState === "disconnected") {
      setEditorMode(false);
    }
  }, [connectState]);
  useEffect(() => {
    try {
      const flag = (globalThis as any).sdpppX?.useMinimalStandalone;
      if (flag) setMinimalMode(true);
    } catch {}
  }, []);
  if (minimalMode) {
    const settingsContent = (
      <div
        style={{
          padding: 8,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        <div style={{ marginBottom: 8 }}>
          <AddressBar />
        </div>
        <div
          className="editor-card"
          style={editorCardShowingIndex === 0 ? {} : { display: "none" }}
        >
          <div className="comfy-list-wrap">
            <WorkflowList setEditorMode={setEditorMode} />
          </div>
        </div>
        <div
          className="editor-card"
          style={editorMode ? {} : { display: "none" }}
        >
          {editorMode && workflowAgentSID && (
            <WorkflowEditWrap WorkflowEditPhotoshop={WorkflowEditPhotoshop} />
          )}
        </div>
      </div>
    );
    return (
      <MinimalStandalone
        onStart={() => runPage(workflowAgentSID)}
        onExit={() => setMinimalMode(false)}
        settingsContent={settingsContent}
      />
    );
  }
  return (
    <>
      <Promote />
      <div className="header-container">
        <div className="connect-box">
          {sdpppX.logo ? (
            <img
              src={sdpppX.logo}
              alt="logo"
              style={{
                width: "28px",
                height: "28px",
                cursor: "pointer",
                marginRight: "2px",
              }}
              title={i18n("Back to workflow list")}
              onClick={() => {
                setEditorMode(false);
              }}
            />
          ) : !editorMode ? (
            <div className={"status-bar " + connectState}>
              <div
                className="status-icon"
                title={
                  lastConnectErrorMessage?.toString() || i18n(connectState)
                }
              >
                ⬤
              </div>
            </div>
          ) : (
            <sp-action-button
              onClick={() => {
                setEditorMode(false);
              }}
            >
              ←
            </sp-action-button>
          )}
          <AddressBar />
          <sp-action-button
            onClick={() => setMinimalMode(!minimalMode)}
            style={{ marginLeft: "8px" }}
          >
            极简模式
          </sp-action-button>
        </div>
      </div>
      {lastConnectErrorMessage ? (
        <div>
          <sp-label class="error-label">
            {isValidI18nKey(lastConnectErrorMessage)
              ? i18n(lastConnectErrorMessage as any)
              : lastConnectErrorMessage}
          </sp-label>
        </div>
      ) : (
        ""
      )}
      {connectState === "connected" && (
        <div className="panel-body">
          <div
            className="editor-card"
            style={editorCardShowingIndex === 0 ? {} : { display: "none" }}
          >
            <div className="comfy-list-wrap">
              <WorkflowList setEditorMode={setEditorMode} />
            </div>
          </div>
          <div
            className="editor-card"
            style={editorMode ? {} : { display: "none" }}
          >
            {editorMode && workflowAgentSID && (
              <WorkflowEditWrap WorkflowEditPhotoshop={WorkflowEditPhotoshop} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
