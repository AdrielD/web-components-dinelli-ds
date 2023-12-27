/// <reference types="vitest" />
import { defineConfig } from 'vite';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    minifyHTML.default(),
  ],
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)', '**/test.ts'],
    environment: 'happy-dom',
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'dinelli-ds',
      fileName: 'dinelli-ds',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit'
        },
      },
    },
  },
});
