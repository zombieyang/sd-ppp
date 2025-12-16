import { Content } from "./Content.js";
import { SDPPP, SDPPPProvider } from "./SDPPPInternalBridge.js";
import { useState } from "react";
import type {
  AddressBarType,
  WorkflowEditPhotoshopType,
} from "./SDPPPInternalBridge.js";

export default function Main() {
  const [connectState, setConnectState] = useState<
    "connected" | "disconnected" | "connecting"
  >("connecting");
  const [AddressBar, setAddressBar] = useState<AddressBarType>(() => () => (
    <></>
  ));
  const [WorkflowEditPhotoshop, setWorkflowEditPhotoshop] =
    useState<WorkflowEditPhotoshopType>(() => () => <></>);
  return (
    <SDPPPProvider loginAppID={""}>
      <div className="container">
        <div
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
            opacity: 0,
            pointerEvents: "none",
          }}
        >
          <SDPPP
            renderContent={(cs, AB, WE) => {
              setConnectState(cs);
              setAddressBar(() => AB);
              setWorkflowEditPhotoshop(() => WE);
              return null;
            }}
          />
        </div>
        <Content
          connectState={connectState}
          AddressBar={AddressBar}
          WorkflowEditPhotoshop={WorkflowEditPhotoshop}
        />
      </div>
    </SDPPPProvider>
  );
}
