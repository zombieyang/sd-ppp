// @ts-ignore
import cssText from "../ComfyPopup.css"
import { useState } from "react";
import Settings from "./Settings";
import { WorkflowEditWrap } from "./WorkflowEditWeb";
import { ConfigProvider } from 'antd';
import i18n from "../../../../common/i18n.mts";
var docStyle = document.createElement('style');
docStyle.innerHTML = cssText;
document.head.appendChild(docStyle);

export default function ComfyPopup() {
    const [tab, setTab] = useState('1');
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorText: 'var(--fg-color)',
                    colorBgContainer: 'var(--comfy-input-bg)',
                    colorBgElevated: 'var(--comfy-input-bg)',
                    colorFillSecondary: 'var(--comfy-input-bg)',
                    controlItemBgHover: 'var(--comfy-input-bg)',
                    colorBgTextHover: 'var(--comfy-input-bg)',
                    colorBorder: 'var(--p-inputtext-border-color)',
                }
            }}
        >
            <div className="sdppp-menu-container">
                <div className="sdppp-menu-header">
                    <button onClick={() => setTab('1')} className={tab === '1' ? 'active' : ''}>{i18n("Simplify Workflow")}</button>
                    <button onClick={() => setTab('2')} className={tab === '2' ? 'active' : ''}>{i18n("Photoshop")}</button>
                    <span>Powered by SDPPP</span>
                </div>
                <div className="sdppp-menu-content">
                    <div className="sdppp-menu-workflow-edit-wrap" style={{ display: tab === '1' ? 'block' : 'none' }}>
                        <WorkflowEditWrap />
                    </div>
                    <div className="sdppp-menu-settings-wrap" style={{ display: tab === '2' ? 'block' : 'none' }}>
                        <Settings />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}