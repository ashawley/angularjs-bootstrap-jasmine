'use strict';

const path = require('path');
const sh = require('shelljs');

const srcDir = './node_modules';
const installDir = './app/lib';
const files = [
  'jquery/dist/jquery.js',
  'jquery/dist/jquery.min.js',
  'jquery/dist/jquery.min.map',
  'angular/angular.js',
  'angular/angular.min.js',
  'angular/angular.min.js.map',
  'angular-route/angular-route.js',
  'angular-route/angular-route.min.js',
  'angular-route/angular-route.min.js.map',
  'angular-sanitize/angular-sanitize.js',
  'angular-sanitize/angular-sanitize.min.js',
  'angular-sanitize/angular-sanitize.min.js.map',
  'bootstrap/dist/css/bootstrap.css',
  'bootstrap/dist/css/bootstrap.css.map',
  'bootstrap/dist/css/bootstrap.min.css',
  'bootstrap/dist/css/bootstrap.min.css.map',
  'bootstrap/dist/js/bootstrap.js',
  'bootstrap/dist/js/bootstrap.min.js'
];

for (let file of files) {
  const src = path.join(srcDir, file);
  const dst = path.join(installDir, file);
  const dstDir = path.dirname(dst);

  sh.mkdir('-p', dstDir);
  sh.cp(src, dst);
}
