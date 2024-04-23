import {app, action} from "photoshop";

class HistoryChecker {
    static instance = null;
    static createInstance() {
        if (HistoryChecker.instance) {
            return HistoryChecker.instance;
        }
        return new HistoryChecker();
    }
    constructor() {
        HistoryChecker.instance = this;
        this.lastCheckId = -1;
        this.changeCallback = null;
        // this.timer = setInterval(() => {
        //     this.checkHistoryState();
        // }, 1000)
        action.addNotificationListener("historyStateChanged", () => {
            this.checkHistoryState();
        });
    }

    destroy() {
        clearInterval(this.timer);
        this.timer = null;
        this.changeCallback = null;
        HistoryChecker.instance = null;
    }

    setChangeCallback(callback) {
        this.changeCallback = callback;
    }

    checkHistoryState() {
        const historyStates = app.activeDocument?.historyStates;
        if (!historyStates || historyStates.length == 0) return;
        const historyState = historyStates[historyStates.length - 1];
        const historyId = historyState.id;
        if (this.lastCheckId == historyId) return;
        this.lastCheckId = historyId;
        if (this.changeCallback) 
            this.changeCallback(historyId);
    }
}

export default HistoryChecker;