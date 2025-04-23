import "mocha";
import { pagePhotoshopStoreMap, pageStore } from "../../../modules/comfy/photoshopModels.mjs";

(globalThis as any).sdppp_debugPageStore = pageStore;
(globalThis as any).sdppp_debugPagePhotoshopStoreMap = pagePhotoshopStoreMap;

mocha.setup({
    reporter: "spec",
    ui: "bdd",
});
mocha.cleanReferencesAfterRun(false);


(globalThis as any).sdpppTest = async function () {
    // await Promise.all([import('./comfy/forming.test.mjs')]);
    mocha.run();
}