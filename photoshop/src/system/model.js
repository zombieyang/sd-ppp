import { app } from "photoshop";

export default class Model {
    static instance;

    historyStateId = 0;

    historyCallbacks = [];
    onHistoryChange(callback) {
        this.historyCallbacks.push(callback);
    }
    _callHistoryChange(data) {
        this.historyCallbacks.forEach(cb => {
            try {
                cb(data)
            } catch (e) { console.error(e) }
        });
    }
    _ignoreNext = false;
    ignoreNextHistoryChange() {
        this._ignoreNext = true;
    }

    constructor() {
        if (Model.instance) throw new Error('Model already inited')
        Model.instance = this;

        setInterval(() => {
            const historyStates = app.activeDocument?.historyStates;
            if (historyStates && historyStates.length > 0) {
                const historyState = historyStates[historyStates.length - 1];
                if (this.historyStateId != historyState.id && !this._ignoreNext && historyState.name != 'Image To ComfyUI') {
                    this.historyStateId = historyState.id;
                    this._callHistoryChange();

                } else {
                    this._ignoreNext = false;
                    this.historyStateId = historyState.id;
                }
            } 
        }, 250)
    }
}