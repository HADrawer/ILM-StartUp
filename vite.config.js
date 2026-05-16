import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/ILM-StartUp/" : "/",
  build: {
    rollupOptions: {
      input: {
        index: new URL("./index.html", import.meta.url).pathname,
        ilm: new URL("./ilm.html", import.meta.url).pathname,
      },
    },
  },
}));
