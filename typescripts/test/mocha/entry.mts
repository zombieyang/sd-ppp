import "mocha";
import { sdpppX } from "../../src/common/sdpppX.mts";

(globalThis as any).sdpppTest = async (options: Mocha.MochaOptions = {}) => {
    mocha.setup({
        reporter: "spec",
        ui: "bdd",
        ...options
    });
    await sdpppX.registerTestCase()
    mocha.cleanReferencesAfterRun(false);
    mocha.run();
}