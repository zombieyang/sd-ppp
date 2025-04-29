import { WorkflowEditWrap } from "./WorkflowEditWeb";

export default function ComfySidebar({
    onMaximize,
    onPhotoshop,
}: {
    onMaximize: () => void,
    onPhotoshop: () => void
}) {
    return (
        <div className="sdppp-side-container">
            <div className="sdppp-side-header">
                <button className="sdppp-photoshop-icon" onClick={onPhotoshop}></button>
                <button className="pi pi-window-maximize" onClick={onMaximize}></button>
            </div>
            <WorkflowEditWrap />
        </div>
    )
}