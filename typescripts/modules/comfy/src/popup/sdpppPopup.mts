import { createRoot } from "react-dom/client";
import { createElement } from "react";
import ComfyPopup from "./tsx/ComfyPopup";
import ComfySidebar from "./tsx/ComfySidebar";

let sdpppCanvasRendered: any = null
let sdpppSideBarRendered: any = null
export default async function initPopup(app: any) {
    if (!sdpppCanvasRendered) {
        const sdpppCanvas = document.createElement('div');
        sdpppCanvas.id = "sdppp-popup-root";
        sdpppCanvas.style.display = "none";
        document.getElementById("graph-canvas-container")?.prepend(sdpppCanvas);

        app.extensionManager.registerSidebarTab({

            id: "sdppp",
            title: "SD-PPP",
            tooltip: "SD-PPP Workflow UI",
            icon: "sdppp-side-icon",
            type: "custom",
            render: (container: HTMLElement) => {
                if (!sdpppSideBarRendered) {
                    container.style.width = "100%";
                    container.style.height = "auto";
                    container.style.padding = "8px";
                    createRoot(container).render(createElement(ComfySidebar, {
                        onMaximize: () => {
                            if (!sdpppCanvasRendered) {
                                createRoot(sdpppCanvas).render(createElement(ComfyPopup, {
                                    onClose: () => {
                                        sdpppCanvas.style.display = "none";
                                    }
                                }));
                            }
                            sdpppCanvas.style.display = "flex";
                            document.querySelector(".sdppp-side-icon")?.parentElement?.click();
                        }
                    }))
                }
                sdpppCanvas.style.display = "none";
            }
        });

    }
}

