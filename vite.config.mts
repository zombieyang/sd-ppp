import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: "/plugins/photoshop/preview-vite/index.html",
  },
  root: ".",
  build: {
    outDir: "dist-vite",
    emptyOutDir: true,
  },
});
