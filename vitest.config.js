import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    coverage: {
      include: ["{packages,src}/**/*.{js,ts}"],
      exclude: [
        "**/*.test.{js,ts}",
        "**/index.js",
        "**/types.d.ts",
        "**/README.md",
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
    setupFiles: [resolve(__dirname, "happydom.js")],
  },
});
