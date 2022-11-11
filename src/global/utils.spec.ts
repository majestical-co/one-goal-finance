import { convertFolderIndexToPathName } from './utils';

describe('convertFolderIndexToPathName', () => {
  it('should work with root index', () => {
    const url = new URL('https://onegoalfinance.com');
    const filePath = '/index.html';

    const res = convertFolderIndexToPathName(url, filePath);

    expect(res).toBe('/index.html');
  });
  it('should work with root index', () => {
    const url = new URL('https://onegoalfinance.com');
    const filePath = '/git/one-goal-finance/www/index.html';

    const res = convertFolderIndexToPathName(url, filePath);

    expect(res).toBe('/git/one-goal-finance/www/index.html');
  });
  it('should work with one level deep', () => {
    const url = new URL('https://onegoalfinance.com/privacy-policy');
    const filePath = '/git/one-goal-finance/www/privacy-policy/index.html';

    const res = convertFolderIndexToPathName(url, filePath);

    expect(res).toBe('/git/one-goal-finance/www/privacy-policy.html');
  });
  it('should work with two levels deep', () => {
    const url = new URL('https://onegoalfinance.com/blog/getting-started');
    const filePath = '/git/one-goal-finance/www/blog/getting-started/index.html';

    const res = convertFolderIndexToPathName(url, filePath);

    expect(res).toBe('/git/one-goal-finance/www/blog/getting-started.html');
  });
  it('should work with any file structure 3 levels deep', () => {
    const url = new URL('https://onegoalfinance.com/blog/getting-started/one');
    const filePath = 'git/one-goal-finance/www/blog/getting-started/one/index.html';

    const res = convertFolderIndexToPathName(url, filePath);

    expect(res).toBe('git/one-goal-finance/www/blog/getting-started/one.html');
  });
});
