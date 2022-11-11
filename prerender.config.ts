import { PrerenderConfig } from '@stencil/core';
import { convertFolderIndexToPathName } from './src/global/utils';

export const config: PrerenderConfig = {
  trailingSlash: false,
  filePath: convertFolderIndexToPathName,
};
