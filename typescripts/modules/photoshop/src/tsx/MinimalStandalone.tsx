import { useState } from "react";
import CogIcon from "./icons/CogIcon.js";

export default function MinimalStandalone({
  onStart,
  onExit,
  settingsContent,
}: {
  onStart?: () => void;
  onExit?: () => void;
  settingsContent?: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#0d0d0d",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          padding: "6px 10px",
          borderRadius: 10,
          background: "rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <CogIcon size={0.8} onClick={() => setShowSettings((s) => !s)} />
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setShowSettings((s) => !s)}
        >
          设置
        </span>
        <span style={{ marginLeft: 8, cursor: "pointer" }} onClick={onExit}>
          关闭极简
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <button
          onClick={async () => {
            if (loading) return;
            setLoading(true);
            try {
              await onStart?.();
            } finally {
              setLoading(false);
            }
          }}
          style={{
            padding: "14px 24px",
            fontSize: 14,
            borderRadius: 8,
            border: "1px solid #333",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {loading ? "启动中…" : "启动工作流"}
        </button>
      </div>
      {showSettings && (
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 8,
            zIndex: 1000,
            width: "min(840px, 90vw)",
            height: "min(85vh, 680px)",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span style={{ fontSize: 12, opacity: 0.8 }}>设置</span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowSettings(false)}
            >
              ×
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "calc(100% - 34px)",
              overflow: "auto",
              color: "#fff",
            }}
          >
            {settingsContent}
          </div>
        </div>
      )}
    </div>
  );
}
