import React from "react";

import "./styles.css";
import { PanelController } from "./controllers/PanelController.jsx";
import Main from "./panels/Main.jsx";
import { TEXTS } from "./system/system.mjs";
import { entrypoints } from "uxp";
import { ViewModel } from "./panels/ViewModel.js";

const demosController = new PanelController(() => <Main />, {
    id: "sdppp-connect", menuItems: [
        {
            id: "wide mode", label: TEXTS("Wide Mode"), enabled: true, checked: ViewModel.wideMode, oninvoke: () => {
                const menuItem = entrypoints
                    .getPanel('sdppp-connect')
                    .menuItems
                    .getItem('wide mode');
                if (!menuItem) return;
                const checked = menuItem.checked = !menuItem.checked;
                ViewModel.wideMode = checked;
            }
        },
        // { id: "dialog1", label: "About this Plugin", enabled: true, checked: false, oninvoke: () => aboutController.run() },
    ]
});
entrypoints.setup({
    plugin: {
        create(plugin) {
            /* optional */ console.log("created", plugin);
        },
        destroy() {
            /* optional */ console.log("destroyed");
        }
    },
    panels: {
        'sdppp-connect': demosController,
    }
});
// ViewModel.init().then(() => {
//     entrypoints
//         .getPanel('sdppp-connect')
//         .menuItems
//         .getItem('wide mode')
//         .checked = ViewModel.wideMode
// })