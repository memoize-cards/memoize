import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      artifact: resolve(__dirname, "packages/artifact"),
      directive: resolve(__dirname, "packages/directive"),
      element: resolve(__dirname, "packages/element"),
      pixel: resolve(__dirname, "packages/pixel"),
      polyfill: resolve(__dirname, "packages/polyfill"),
      standard: resolve(__dirname, "packages/standard"),
    },
  },
  test: {
    coverage: {
      include: ["{packages,src}/**/*.{js,ts}"],
      exclude: [
        "{src,packages}/**/*.test.{js,ts}",
        "{src,packages}/**/index.{js,ts}",
        "{src,packages}/**/types.d.ts",
      ],
      reporter: ["lcov", "html"],
      thresholds: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0,
      },
    },
    environment: "jsdom",
    setupFiles: [
      resolve(__dirname, "packages/polyfill/index.js"),
      resolve(__dirname, "happydom.js"),
    ],
  },
});
