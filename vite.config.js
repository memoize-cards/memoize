import { resolve } from "path";
import { terser } from "rollup-plugin-terser";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "terser",
    terserOptions: {
      keep_fnames: true,
    },
  },
  resolve: {
    alias: {
      artifact: resolve(__dirname, "packages/artifact"),
      directive: resolve(__dirname, "packages/directive"),
      element: resolve(__dirname, "packages/element"),
      pixel: resolve(__dirname, "packages/pixel"),
      polyfill: resolve(__dirname, "packages/polyfill"),
      standard: resolve(__dirname, "packages/standard"),
      oauth: resolve(__dirname, "src/oauth"),
    },
  },
});
