import React from "react";

import { versions } from "uxp";
import os from "os";

import "./About.css";

export const About = (props) => {
    return (
        <form method="dialog" className="aboutDialog">
        <sp-heading>React Starter Plugin</sp-heading>
        <sp-divider size="large"></sp-divider>
        <sp-body>
            This is a simple plugin that demonstrates the various capabilities of React on UXP.
            When adapting to your own projects, you can replace <code>index.jsx</code> and the components
            with your own. 
        </sp-body>
        <webview id="webview" width="100%" height="360px" src="https://www.google.com"></webview>
        <sp-body class="well">
            <sp-icon name="ui:InfoSmall" size="s"></sp-icon>
            We've also included the `WC` component and a couple of controllers. You
            do not need to use these in your own projects, but you are welcome to do so.
        </sp-body>
        <sp-detail>VERSIONS</sp-detail>
        <div className="table">
            <div><sp-detail>PLUGIN: </sp-detail><sp-body> {versions.plugin}</sp-body></div>
            <div><sp-detail>OPERATING SYSTEM:</sp-detail><sp-body> {os.platform()} {os.release()}</sp-body></div>
            <div><sp-detail>UNIFIED EXTENSIBILITY PLATFORM:</sp-detail><sp-body>{versions.uxp}</sp-body></div>
        </div>
        <sp-button-group>
            <sp-button tabindex={0} variant="secondary" quiet="quiet" onClick={() => props.dialog.close("reasonCanceled")}>Cancel</sp-button>
            <sp-button tabindex={0} autofocus="autofocus" variant="primary" onClick={() => props.dialog.close("ok")}>OK</sp-button>
        </sp-button-group>
    </form>
    );
}
