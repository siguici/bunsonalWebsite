import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { resolve } from "path";

export default defineConfig({
  plugins: [
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 7300,
    open: false,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: resolve(__dirname, "src/App.tsx"),
      preserveEntrySignatures: "exports-only",
      external: ["solid-js"],
      output: {
          assetFileNames: "assets/int.css",
          entryFileNames: "bundle2.js",
          format: "esm",
      },
    },
  }

});
