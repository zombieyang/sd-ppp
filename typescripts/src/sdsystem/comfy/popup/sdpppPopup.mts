import { createRoot } from "react-dom/client";
import { createElement } from "react";
import ComfyPopup from "./tsx/ComfyPopup";
import ComfySidebar from "./tsx/ComfySidebar";

let sdpppDialog: any = null
export default async function initPopup(app: any) {
    if (!sdpppDialog) {
        Promise.all([
            // @ts-ignore
            import("/scripts/ui.js"),
            // @ts-ignore
            import("/scripts/ui/components/buttonGroup.js"),
            // @ts-ignore
            import("/scripts/ui/components/button.js"),
        ]).then(([{ $el, ComfyDialog }, { ComfyButtonGroup }, { ComfyButton }]) => {

            class SDPPPDialog extends ComfyDialog {
                constructor() {
                    super();
                    const reactRoot = $el("div")
                    const close_button = $el("button.sdppp-close-button", { type: "button", textContent: "X", onclick: () => this.close() });
                    const content =
                        $el("div.comfy-modal-content",
                            [
                                reactRoot,

                                close_button,
                            ]
                        );

                    content.style.width = '100%';
                    content.style.height = '100%';

                    this.element = $el("div.comfy-modal", { parent: document.body }, [content]);

                    createRoot(reactRoot).render(createElement(ComfyPopup));
                }
            }

            // const span = document.createElement('span');
            // span.style.fontSize = '0.6em';
            // span.style.margin = '-5px 0';
            // span.innerHTML = "SD<br/>PPP";
            // let sdpppGroup = new ComfyButtonGroup(
            //     new ComfyButton({
            //         action: () => {
            //             if (!sdpppDialog) {
            //                 sdpppDialog = new SDPPPDialog();
            //             }
            //             sdpppDialog.show();

            //         },
            //         tooltip: "SD-PPP Workflow UI",
            //         content: span,
            //         classList: "comfyui-button comfyui-menu-mobile-collapse"
            //     }).element
            // );
            // app.menu?.settingsGroup.element.before(sdpppGroup.element);
            // requestAnimationFrame(() => {
            //     if (span.parentElement) {
            //         span.parentElement.style.lineHeight = '0.4em';
            //     }
            // });

            // export interface BaseSidebarTabExtension {
            //     id: string
            //     title: string
            //     icon?: string
            //     iconBadge?: string | (() => string | null)
            //     tooltip?: string
            //   }

            //   export interface CustomExtension {
            //     id: string
            //     type: 'custom'
            //     render: (container: HTMLElement) => void
            //     destroy?: () => void
            //   }

            app.extensionManager.registerSidebarTab({
                id: "sdppp",
                title: "SD-PPP",
                tooltip: "SD-PPP Workflow UI",
                icon: "sdppp-side-icon",
                type: "custom",
                render: (container: HTMLElement) => {
                    container.style.width = "100%";
                    container.style.height = "auto";
                    container.style.padding = "8px";
                    createRoot(container).render(createElement(ComfySidebar, {
                        onMaximize: () => {
                            if (!sdpppDialog) {
                                sdpppDialog = new SDPPPDialog();
                            }
                            sdpppDialog.show();
                            document.querySelector(".sdppp-side-icon")?.parentElement?.click();
                        }
                    }))
                }
            });
        });

    }
}

