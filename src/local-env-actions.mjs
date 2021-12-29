import fs from 'fs'

export function replaceJSONContents(path, json) {
  fs.writeFileSync(path, JSON.stringify(json), err => {
    if (err) {
      console.log(err);
    }

    console.log('done');
  });
}

export function renameTheme(path, themeName) {
  fs.readFile(path, 'utf-8', function(err, data) {
    if (err) {
      console.log(err)
    }

    var newValue = data.replace(/YOUR_THEME_NAME/gim, themeName);

    fs.writeFile(path, newValue, 'utf-8', function(err, data) {
      if (err) {
        console.log(err)
      }
    })
 })
}

export function renameBrowserSyncPaths(path, themeName) {
  fs.readFile(path, 'utf-8', function(err, data) {
    if (err) {
      console.log(err)
    }

    var newValue = data.replace(/alpaca-boilerplate.test/gim, `${themeName}.test`);

    fs.writeFile(path, newValue, 'utf-8', function(err, data) {
      if (err) {
        console.log(err)
      }
    })
 })
}

export function createDirectory(path) {
  fs.promises.mkdir(path, { recursive: true }, (err) => {
    if (err) {
      console.log(err)
    }
  });
}