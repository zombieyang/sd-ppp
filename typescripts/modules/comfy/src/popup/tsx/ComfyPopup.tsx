// @ts-ignore
import cssText from "../ComfyPopup.css"
import { useEffect, useState } from "react";
import Settings from "./Settings";
import { WorkflowEditWrap } from "./WorkflowEditWeb";
import { ConfigProvider } from 'antd';
import { CloseOutlined } from "@ant-design/icons";
import i18n from "../../../../../src/common/i18n.mts";
var docStyle = document.createElement('style');
docStyle.innerHTML = cssText;
document.head.appendChild(docStyle);

export default function ComfyPopup({ onClose, tab }: { onClose: () => void, tab: string }) {
    const [_tab, setTab] = useState('1');
    const [sidebarWidth, setSidebarWidth] = useState(0);
    useEffect(() => {
        setTab(tab);
    }, [tab]);
    
    useEffect(() => {
        const $canvas = document.getElementById('graph-canvas');
        let frameCount = 0;
        let animationFrameId: number;
        
        const updateDimensions = () => {
            frameCount++;
            if (frameCount % 3 === 0 && $canvas) {
                const sideBar = document.querySelector('.side-bar-panel') as HTMLElement;
                if (sideBar && sideBar.style.display !== 'none') {
                    setSidebarWidth(sideBar.clientWidth);
                } else {
                    setSidebarWidth(0);
                }
            }
            animationFrameId = requestAnimationFrame(updateDimensions);
        };
        
        animationFrameId = requestAnimationFrame(updateDimensions);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

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
            <div className="sdppp-menu-container" style={{ 
                paddingLeft: sidebarWidth
            }}>
                <div className="sdppp-menu-header">
                    <div className="sdppp-menu-header-left">
                        <button onClick={() => setTab('1')} className={_tab === '1' ? 'active' : ''}>{i18n("Simplify Workflow")}</button>
                        <button onClick={() => setTab('2')} className={_tab === '2' ? 'active' : ''}>{i18n("Photoshop")}</button>
                    </div>
                    <span>Powered by SDPPP</span>
                    <button className="sdppp-menu-close-button" onClick={onClose}><CloseOutlined /></button>
                </div>
                <div className="sdppp-menu-content">
                    <div className="sdppp-menu-workflow-edit-wrap" style={{ display: _tab === '1' ? 'block' : 'none' }}>
                        <WorkflowEditWrap />
                    </div>
                    <div className="sdppp-menu-settings-wrap" style={{ display: _tab === '2' ? 'block' : 'none' }}>
                        <Settings />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
}