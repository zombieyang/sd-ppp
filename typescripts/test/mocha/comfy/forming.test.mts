import { assert } from "chai";
import { findAvailableNodeInGraph } from "../../../modules/comfy/src/graph-to-form.mjs";

declare const app: any;
describe("ComfyUI", () => {

    // need node:
    // primitive without widgets
    // primitive string widget
    // primitive number widget
    // primitive combo widget
    // primitive toggle widget
    // document widget
    // layer widget
    // rhthree node
    describe("findAvailableNodeInGraph", async () => {
        const formSections = findAvailableNodeInGraph(app.graph)
        console.log(formSections)

        it("hidden starts with .", () => {
            const hiddenNodes = formSections.filter(section => section.title.startsWith("."))
            assert.equal(hiddenNodes.length, 0, "Hidden nodes should not be included in the form")
        })

        it("muted starts with #", () => {
            const mutedNodes = formSections.filter(section => section.title.startsWith("Muted"))
            assert.equal(mutedNodes.length, 0, "Muted nodes should not be included in the form")
        })

        it("no widgets", () => {
            const noWidgetsNodes = formSections.filter(section => section.widgets.length == 0)
            assert.equal(noWidgetsNodes.length, 0, "No widgets nodes should not be included in the form")
        })

        it('sort by title', () => {
            assert.equal(formSections[0].title, "#00. positive prompt")
        })

        it("sampler_name section", () => {
            const sampleNameSection = formSections.find(section => section.title == "sampler_name")
            assert(sampleNameSection, "Sample Name section not found")
            assert.equal(sampleNameSection.widgets.length, 2, "Sample Name section should have 2 widgets")
            assert.equal(sampleNameSection.widgets[0].uiWeight, 2, "First widget in Sample Name section should have uiWeight 2")
            assert.equal(sampleNameSection.widgets[1].uiWeight, 0.8, "Second widget in Sample Name section should have uiWeight 0.8")
        })

        it("cfg section", () => {
            const cfgScaleSection = formSections.find(section => section.title == "cfg")
            assert(cfgScaleSection, "CFG Scale section not found")
            assert.equal(cfgScaleSection.widgets.length, 1, "CFG Scale section should have 1 widget")
            assert.equal(cfgScaleSection.widgets[0].uiWeight, 2, "First widget in CFG Scale section should have uiWeight 2")
        })

        it("seed section", () => {
            const seedSection = formSections.find(section => section.title == "seed")
            assert(seedSection, "Seed section not found")
            assert.equal(seedSection.widgets.length, 2, "Seed section should have 2 widgets")
            assert.equal(seedSection.widgets[0].uiWeight, 2, "First widget in Seed section should have uiWeight 2")
            assert.equal(seedSection.widgets[1].uiWeight, 0.8, "Second widget in Seed section should have uiWeight 0.8")
        })
    });
});
