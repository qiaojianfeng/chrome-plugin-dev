import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
const isSpecialChunk = (pathData: any) => {
  return pathData.chunk?.name === 'contentScript' || pathData.chunk?.name === 'serviceWorker';
};
export default defineConfig({
  source: {
    entry: {
      popup: './src/popup/index.tsx',
      contentScript: {
        import: './src/contentScripts/index.ts',
        html: false,
      },
      serviceWorker: {
        import: './src/serviceWorker/index.ts',
        html: false,
      },
    },
  },
  output: {
    filename: {
      js: (pathData) => {
        return isSpecialChunk(pathData) ? '[name].js' : '[name].[contenthash:8].js';
      },
      css: (pathData) => {
        return isSpecialChunk(pathData) ? '[name].css' : '[name].[contenthash:8].css';
      },
    },
  },
  plugins: [
    pluginReact(),
  ],
});