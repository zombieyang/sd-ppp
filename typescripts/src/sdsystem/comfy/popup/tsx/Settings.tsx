import React, { useState } from "react";
import { pageStore } from "../../../common/models/photoshopModels.mts";
import i18n from "../../../../common/i18n.mts";
import { api } from "../../comfy-globals.mts";

const Settings: React.FC = () => {
    const [maxImageWH, setMaxImageWH] = useState(pageStore.data.maxImageWH);

    const handleDownloadPlugin = () => {
        location.href = "/sd-ppp-static/sd-ppp_PS.ccx?_=" + Date.now();
    };

    return (
        <div className="settings-container">
            <h2>{i18n("SDPPP Settings/Misc")}</h2>

            <div className="settings-section">
                <p>{i18n("Comfy URL: {0}", location.origin)}</p>
                <p>{i18n("(Page ID: {0})Queue: {1}", pageStore.data.ssid, pageStore.data.queueSize)}</p>
            </div>

            <div className="settings-section settings-row">
                <div className="settings-label">
                    <label htmlFor="maxImageSize">{i18n("Maximum Image Size (px):")}</label>
                </div>
                <div className="settings-control">
                    <input
                        type="number"
                        id="maxImageSize"
                        value={maxImageWH}
                        onChange={(event) => {
                            const number = event.currentTarget.value ? parseInt(event.currentTarget.value) : 0;
                            if (!isNaN(number)) {
                                pageStore.setMaxImageWH(number);
                                setMaxImageWH(number);
                                api.storeSetting('sdppp.maxImageWH', number)
                            }
                        }}
                        min="256"
                    />
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
        </div>
    );
};

export default Settings;