const fs = require('fs');

fs.readFile('./www/host.config.json', 'utf-8', (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    let fileContents = `/apple-app-site-association
  content-type: application/json
`;
    const dataParse = JSON.parse(data);
    const headerData = dataParse.hosting.headers;

    headerData.map(entry => {
      fileContents += `${entry.source}\n`;
      console.log('entry.source', entry.source);
      if (entry.source === '/') {
        // adding push headers for app.js and app.css
        // these are added inline in a standard --prerender build
        fileContents += `  Link:</build/app.js>;rel=preload;as=script\n`;
        fileContents += `  Link:</build/app.css>;rel=preload;as=style\n`;
      }
      entry.headers.map(header => {
        fileContents += `  ${header.key}:${header.value}\n`;
      });
      fileContents += `\n`;
    });

    fs.writeFile('www/_headers', fileContents, 'utf8', err => {
      if (err) {
        console.log(`Something went wrong: ${err}`);
      } else {
        console.log('Success: Added Netlify Headers');
      }
    });
  }
});
