import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: "",
        },
      ],
    }),
  ],
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "index.html"),
        sidepanel: resolve(__dirname, "sidepanel.html"),
        options: resolve(__dirname, "options.html"),
        background: resolve(__dirname, "src/app/background.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
