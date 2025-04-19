import { WorkflowEditWrap } from "./WorkflowEditWeb";

export default function ComfySidebar({
    onMaximize,
}: {
    onMaximize: () => void
}) {
    return (
        <div className="sdppp-side-container">
            <div className="sdppp-side-header">
                <button className="pi pi-window-maximize" onClick={onMaximize}></button>
            </div>
            <WorkflowEditWrap />
        </div>
    )
}