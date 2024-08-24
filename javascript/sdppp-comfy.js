(async function () {
    if (typeof gradioApp != 'undefined') return;
    // @ts-ignore
    const { app } = await import("../../../scripts/app.js");
    // @ts-ignore
    const { api } = await import("../../../scripts/api.js");
    // @ts-ignore
    const { $el } = await import('../../../scripts/ui.js');

    const { init } = await import('./entries/comfy-entry.mjs')
    await init(app, api, $el);
})();
