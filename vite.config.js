/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)', '**/test.ts'],
    environment: 'happy-dom',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'dinelli-ds',
      fileName: 'dinelli-ds',
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
