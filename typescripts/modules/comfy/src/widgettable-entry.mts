import { api, app } from "./comfy-globals.mts";
import { pageStore } from "../photoshopModels.mts";
import { makeWidgetTableStructure, getWidgetTableValue } from "./graph-to-form.mts";
import { WidgetTableStructure } from "../../../src/types/sdppp";


api.addEventListener("graphChanged", (event: { detail: any }) => {
    const workflowManager = app.workflowManager || app.extensionManager.workflow
    const activeWorkflow = workflowManager.activeWorkflow;
    if (event.detail.id !== activeWorkflow.activeState.id) return
    const originalWTStructure = pageStore.data.widgetTableStructure;
    const newWTStructure = makeWidgetTableStructure(app.graph, activeWorkflow);
    if (isStructureDiff(newWTStructure, originalWTStructure)) {
        pageStore.setWidgetTableStructure(newWTStructure);
    }
    pageStore.setWidgetTableValue(getWidgetTableValue(app.graph));
})
api.addEventListener("executed", () => {
    pageStore.setWidgetTableValue(getWidgetTableValue(app.graph));
})


let lastActiveWorkflowID: number = 0;
let lastActivePersisted: boolean = true;
let lastActiveWorkflowPath: string = '';

function checkGraphUpdate() {
    requestAnimationFrame(checkGraphUpdate)
    const workflowManager = app.workflowManager || app.extensionManager.workflow
    const activeWorkflow = workflowManager.activeWorkflow;
    const currentWorkflowID = activeWorkflow?.id || 0
    const currentWorkflowPath = activeWorkflow?.path || ''
    const currentPersisted = activeWorkflow?.isPersisted || true
    if (
        currentWorkflowID === lastActiveWorkflowID &&
        currentWorkflowPath === lastActiveWorkflowPath &&
        currentPersisted === lastActivePersisted
    ) return;
    lastActiveWorkflowID = currentWorkflowID;
    lastActiveWorkflowPath = currentWorkflowPath;
    lastActivePersisted = currentPersisted;

    const wtStructure = makeWidgetTableStructure(app.graph, activeWorkflow);
    const wtValue = getWidgetTableValue(app.graph);
    pageStore.setWidgetTableStructure(wtStructure);
    pageStore.setWidgetTableValue(wtValue);
    // rgthree may have some delay
    setTimeout(() => {
        if (activeWorkflow !==  workflowManager.activeWorkflow) return
        const newWTStructure = makeWidgetTableStructure(app.graph, activeWorkflow);
        const newWTValue = getWidgetTableValue(app.graph);
        if (isStructureDiff(newWTStructure, wtStructure)) {
            pageStore.setWidgetTableStructure(newWTStructure);
        }
        pageStore.setWidgetTableValue(newWTValue);
    }, 800)
}
requestAnimationFrame(checkGraphUpdate)


function isStructureDiff(structure1: WidgetTableStructure, structure2: WidgetTableStructure) {
    if (structure1.nodeIndexes.length !== structure2.nodeIndexes.length) return true;
    if (JSON.stringify(structure1.nodeIndexes) !== JSON.stringify(structure2.nodeIndexes)) return true;
    if (JSON.stringify(structure1.groups) !== JSON.stringify(structure2.groups)) return true;
    if (JSON.stringify(structure1.nodes) !== JSON.stringify(structure2.nodes)) return true;
    return false;
}