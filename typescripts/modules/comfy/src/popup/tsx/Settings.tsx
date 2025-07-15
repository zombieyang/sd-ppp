import React, { useState } from "react";
import { pageStore } from "../../../photoshopModels.mts";
import i18n from "../../../../../src/common/i18n.mts";
import { api } from "../../comfy-globals.mts";
import { Checkbox } from "antd";

const Settings: React.FC = () => {
    const [useSliderForNumberWidget, setUseSliderForNumberWidget] = useState(pageStore.data.useSliderForNumberWidget);
    const handleDownloadPlugin = () => {
        location.href = "/sd-ppp-static/sd-ppp_PS.ccx?_=" + Date.now();
    };
    const handleDownloadPlugin2 = () => {
        location.href = "https://gitee.com/zombieyang/sd-ppp/raw/main/static/sd-ppp2_PS.ccx?_=" + Date.now();
    };

    return (
        <div className="settings-container">
            <h2>{i18n("SDPPP Settings/Misc")}</h2>

            <div className="settings-section">
                <div className="settings-label">
                    <label>{i18n("Comfy URL (You can copy it to connect ComfyUI in the plugin):")}</label>
                </div>
                <div className="settings-control">
                    {location.href.split("?")[0].split("#")[0]}
                </div>
            </div>

            <div className="settings-section settings-row">
                <div className="settings-label">
                    <label>{i18n("Photoshop plugin")}</label>
                </div>
                <div className="settings-control">
                    <button onClick={handleDownloadPlugin} className="download-button">
                        {i18n("Download")}
                    </button>
                </div>
            </div>
            <div className="settings-section settings-row">
                <div className="settings-label">
                    <label>{i18n("Photoshop plugin")} 2.0 Beta(CHN only)</label>
                </div>
                <div className="settings-control">
                    <button onClick={handleDownloadPlugin2} className="download-button">
                        {i18n("Download")}
                    </button>
                </div>
            </div>

            <div className="settings-section settings-row">
                <div className="settings-label">
                    <label htmlFor="maxImageSize">{i18n("use slider for number widget:")}</label>
                </div>
                <div className="settings-control">
                    <Checkbox
                        id="useSliderForNumberWidget"
                        checked={useSliderForNumberWidget}
                        onChange={(event) => {
                            setUseSliderForNumberWidget(event.target.checked);
                            pageStore.setUseSliderForNumberWidget(event.target.checked);
                            api.storeSetting('sdppp.useSliderForNumberWidget', event.target.checked)
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Settings;