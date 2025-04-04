import React from "react";
import i18n from "../../../common/i18n.mjs";
import WebPageListItem from "./WebPageListItem";
import { useSDPPPContext, useSDPPPWebpageList } from "./SDPPPInternalBridge";

const WebPageList: React.FC = () => {
    const {
        autoRunning
    } = useSDPPPContext();

    const { pageInstances } = useSDPPPWebpageList();

    return (
        <>
            <div className="client-list-title">
                <h3>{i18n('webpages')}</h3>
            </div>
            {
                !pageInstances.length && <sp-label class="list-error-label">{i18n("No opened ComfyUI pages")}</sp-label>
            }
            <ul className="client-list">
                {
                    pageInstances.map((item) => {
                        return (
                            <WebPageListItem key={item.sid} pageInstance={item} />
                        )
                    })
                }
            </ul>
            {autoRunning?.type == 'page' ? <sp-label class="autorun-desc">{
                i18n(`auto run page [{0}] after change..`, pageInstances.find(item => item.sid == autoRunning?.value)?.title)
            }</sp-label> : ''}
        </>
    );
};

export default WebPageList;
