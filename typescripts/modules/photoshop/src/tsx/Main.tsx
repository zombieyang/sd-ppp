import { Content } from "./Content.js";
import { SDPPP, SDPPPProvider } from "./SDPPPInternalBridge.js";

export default function Main() {
    return (
        <SDPPPProvider loginAppID={''}>
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