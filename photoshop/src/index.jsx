import React from "react";

import "./styles.css";
import { PanelController } from "./controllers/PanelController.jsx";
import Main from "./panels/Main.jsx";

import { entrypoints } from "uxp"; 

<<<<<<< HEAD
const demosController =  new PanelController(() => <Main/>, {id: "sdppp-connect", menuItems: [
=======
const demosController = new PanelController(() => <Main/>, {id: "comfy-connect", menuItems: [
>>>>>>> tl/develop_sio_multi_user
    // { id: "reload1", label: "Reload Plugin", enabled: true, checked: false, oninvoke: () => location.reload() },
    // { id: "dialog1", label: "About this Plugin", enabled: true, checked: false, oninvoke: () => aboutController.run() },
] }); 
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
