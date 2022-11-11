import { LocaleString } from './src/global/translate/translate';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { inlineSvg } from 'stencil-inline-svg';

// https://stenciljs.com/docs/config
function getLocale(): LocaleString {
  const locale = process?.env.LOCALE;
  switch (locale) {
    case 'es':
      return 'es';
    default:
      return 'en';
  }
}

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  env: {
    locale: getLocale(),
  },
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
