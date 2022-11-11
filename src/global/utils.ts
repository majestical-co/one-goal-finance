export function exhaustiveCheck(value: never) {
  // this is used to ensure all switch cases return a value.
  // if we add a new value type that the switch should account for, typescript will tell us where the case needs to be added
  return value;
}

export const convertFolderIndexToPathName = (url: URL, filePath: string) => {
  const pathName = url.pathname;
  if (pathName === '/') {
    return filePath;
  }
  const path = `${pathName}.html`;
  const arr = filePath.split('/');
  const count = path.split('/').length;
  const withoutLast = arr.slice(0, -count);
  const newPath = withoutLast.join('/') + path;
  console.log({ url, path, filePath, newPath });
  return newPath;
};
