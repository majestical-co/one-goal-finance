import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://onegoalfinance.com',
      copy: [{ src: '../netlify/_redirects', dest: '_redirects' }],
      serviceWorker: null,
    },
  ],
  plugins: [sass(), inlineSvg()],
  devServer: {
    openBrowser: false,
  },
};
