import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

import { tscPlugin } from "./plugins/vite-plugin-typescript.js";

export default defineConfig({
  plugins: [tscPlugin({ cwd: import.meta.dirname }), vike(), react(), tailwindcss()],

  resolve: {
    alias: {
      "@": new URL("./", import.meta.url).pathname,
    },
  },
});
