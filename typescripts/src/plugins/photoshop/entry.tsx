import Main from "./tsx/Main.js";
import { createRoot } from "react-dom/client";
// import 'sdppp-test/photoshop'

declare const globalThis: any;
globalThis.sdppp = globalThis.sdppp || {};
globalThis.sdppp.renderPhotoshopPlugin = (rootElement: HTMLElement) => {
    createRoot(rootElement).render(<Main />);
}

const logs: any[] = [];
const warningLogs: any[] = [];
const errorLogs: any[] = [];
globalThis.sdppp.getLogs = () => {
    return {
        logs,
        warningLogs,
        errorLogs
    }
}
globalThis.sdppp.enableLogCapture = () => {
    console.log = (function(log) {
        return function(...args: any[]) {
            log(...args);
            logs.push(args);
        }
    })(console.log);

    console.warn = (function(log) {
        return function(...args: any[]) {
            log(...args);
            warningLogs.push(args);
        }
    })(console.warn);

    console.error = (function(log) {
        return function(...args: any[]) {
            log(...args);
            errorLogs.push(args);
        }
    })(console.error);
}