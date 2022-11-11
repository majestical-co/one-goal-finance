import { PrerenderConfig } from '@stencil/core';
export const config: PrerenderConfig = {
  trailingSlash: false,
  filePath: (url, filePath) => {
    const pathName = url.pathname;
    if (pathName === '/') {
      return filePath;
    }
    const path = `${pathName}.html`;
    const arr = filePath.split('/');
    arr.pop();
    arr.pop();
    const newPath = arr.join('/') + path;
    console.log({ url, path, filePath, newPath });

    return newPath;
  },
};
