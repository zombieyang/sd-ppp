import React from "react";
import { createRoot } from "react-dom/client";
import MinimalStandalone from "../modules/photoshop/src/tsx/MinimalStandalone.js";

const rootEl = document.getElementById("root") as HTMLElement;
const root = createRoot(rootEl);

root.render(
  React.createElement(MinimalStandalone, {
    onStart: async () => {
      console.log("Start workflow (preview)");
      await new Promise((r) => setTimeout(r, 300));
    },
    onExit: () => {
      console.log("Exit minimal mode (preview)");
    },
  })
);
