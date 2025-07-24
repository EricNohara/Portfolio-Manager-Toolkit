import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // enables browser-like globals for React tests
    globals: true, // enables global test functions like describe, it, expect
  },
});
