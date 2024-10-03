import { storage } from "uxp";

const ViewModel = new class {
    async init() {
    }

    _wideMode = localStorage.getItem('wideMode') == 'true';
    set wideMode(value) {
        this._wideMode = value;
        localStorage.setItem('wideMode', value.toString());
        this._changeListeners.wideMode.forEach(listener => {
            try {
                listener(value);
            } catch (e) {
                console.error(e);
            }
        });
    }
    get wideMode() {
        return this._wideMode;
    }

    _changeListeners = {
        wideMode: []
    };
    onChange(key, listener) {
        if (!this._changeListeners[key]) {
            throw new Error(`Unknown key: ${key}`);
        }
        this._changeListeners[key].push(listener);
    }
    offChange(key, listener) {
        if (!this._changeListeners[key]) {
            throw new Error(`Unknown key: ${key}`);
        }
        const index = this._changeListeners[key].indexOf(listener);
        if (index >= 0) {
            this._changeListeners[key].splice(index, 1);
        }
    }
}

export { ViewModel }