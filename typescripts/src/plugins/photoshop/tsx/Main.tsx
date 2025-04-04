import { Content } from "./Content.jsx";
import { SDPPP, SDPPPProvider } from "./SDPPPInternalBridge.js";

export default function Main() {
    return (
        <SDPPPProvider>
            <div className="container">
                <SDPPP
                    renderContent={(
                        connectState,
                        AddressBar,
                        WorkflowEditPhotoshop
                    ) => {
                        return (
                            <Content
                                connectState={connectState}
                                AddressBar={AddressBar}
                                WorkflowEditPhotoshop={WorkflowEditPhotoshop}
                            />
                        )
                    }}
                />
            </div>
        </SDPPPProvider>
    )
}