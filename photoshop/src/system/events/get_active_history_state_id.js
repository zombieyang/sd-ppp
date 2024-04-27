import { app } from "photoshop";

export default async function getActiveHistoryStateId() {
    try {
        let result = {};
        const historyStates = app.activeDocument?.historyStates;
        if (historyStates && historyStates.length > 0) {
            const historyState = historyStates[historyStates.length - 1];
            result.history_state_id = historyState.id;
        } 
        return result;
    } catch (e) {
        console.error(e);
        throw e
    }
}