// @ts-ignore
import cssText from "../ComfyPopup.css"
import { WorkflowEditWrap } from "./WorkflowEditWrap";
var docStyle = document.createElement('style');
docStyle.innerHTML = cssText;
document.head.appendChild(docStyle);

export default function ComfyPopup() {
    return ( 
        <div className="sdppp-menu-container">
            <div className="sdppp-menu-workflow-edit-wrap">
                <WorkflowEditWrap />
            </div>
            {/* <Settings /> */}
        </div>
    );
}