const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const baseDir = path.dirname(__dirname.split(path.sep).pop());

const output = fs.createWriteStream(baseDir + '/PlaysAssesment.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('bundle has been created at ./PlaysAssesment.zip');
});

archive.pipe(output);

const rootFiles = [
  'README.md',
  'package.json',
  'package-lock.json',
  'webpack.config.js',
  'bundle.js',
];

rootFiles.forEach(fileName => {
  archive.append(fs.createReadStream(fileName), { name: fileName });
});

archive.directory('src/', 'src');
archive.directory('config/', 'config');
archive.directory('mocks/', 'mocks');

archive.finalize();
