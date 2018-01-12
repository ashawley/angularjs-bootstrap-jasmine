'use strict';

const path = require('path');
const sh = require('shelljs');

const srcDir = './node_modules';
const installDir = './app/dist';
const files = [
  'bootstrap/dist/css/bootstrap.css',
  'bootstrap/dist/css/bootstrap.css.map',
  'bootstrap/dist/css/bootstrap.min.css',
  'bootstrap/dist/css/bootstrap.min.css.map'
];

for (let file of files) {
  const src = path.join(srcDir, file);
  const dst = path.join(installDir, file);
  const dstDir = path.dirname(dst);

  sh.mkdir('-p', dstDir);
  sh.cp(src, dst);
}
