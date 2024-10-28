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
    browser: {
      enable: true,
      headless: true,
      name: "chrome",
      provider: "webdriverio",
    },
    coverage: {
      include: ["**/*.{js,ts}"],
      exclude: ["**/*.test.{js,ts}", "**/index.{js,ts}"],
      provider: "istanbul",
      reporter: ["lcov", "html"],
      thresholds: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0,
      },
    },
  },
});
