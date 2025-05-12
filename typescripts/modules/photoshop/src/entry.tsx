import Main from "./tsx/Main.js";
import { createRoot } from "react-dom/client";

declare const globalThis: any;
globalThis.sdppp = globalThis.sdppp || {};
globalThis.sdppp.renderPhotoshopPlugin = (rootElement: HTMLElement) => {
    createRoot(rootElement).render(<Main />);
}
