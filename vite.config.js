/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },
  test: {
    include: ['**/{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'happy-dom',
  },
});
