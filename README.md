Blackjack in AngularJS 1.x
==========================

[![Build Status](https://travis-ci.org/ashawley/blackjack-angularjs.svg?branch=master)](https://travis-ci.org/ashawley/blackjack-angularjs)

Clone the repository:

    $ git clone git@github.com/ashawley/blackjack-angularjs.git -o upstream

Initialize project:

    $ npm init

    package name: blackjack-angularjs
    version: 0.0.0
    description: Blackjack in AngularJS 1.x
    entry point: app/index.js
    test command: karma start --single-run
    git repository: git@github.com:ashawley/blackjack-angularjs.git
    keywords: angularjs, games, blackjack
    author: Aaron S. Hawley
    license: AGPL-3.0-or-later
    About to write to package.json:
    
    {
      "name": "blackjack-angularjs",
      "version": "0.0.0",
      "description": "Blackjack in AngularJS 1.x",
      "main": "app/index.js",
      "scripts": {
        "test": "karma start --single-run"
      },
      "repository": {
        "type": "git",
        "url": "git+ssh://git@github.com/ashawley/blackjack-angularjs.git"
      },
      "keywords": [
        "angularjs",
        "games",
        "blackjack"
      ],
      "author": "Aaron S. Hawley",
      "license": "AGPL-3.0-or-later",
      "bugs": {
        "url": "https://github.com/ashawley/blackjack-angularjs/issues"
      },
      "homepage": "https://github.com/ashawley/blackjack-angularjs#readme"
    }
    
    
    Is this ok? (yes) yes

Install package dependencies:

    $ npm install
    up to date in 0.102s

Add dependencies:

    $ npm install angular angular-loader angular-route angular-sanitize \
                  angular-ui-bootstrap bootstrap@3 jquery --save-prod
    
    + angular-ui-bootstrap@2.5.6
    + angular@1.6.8
    + angular-loader@1.6.8
    + angular-route@1.6.8
    + angular-sanitize@1.6.8
    + jquery@3.3.1
    + bootstrap@3.3.7
    added 7 packages in 3.599s

Add development dependencies:

    $ npm install angular-mocks beefy browserify browserify-shim budo \
                  glob http-server jasmine-core jasmine-jquery jshint \
                  karma karma-browserify karma-chrome-launcher karma-coverage \
                  karma-firefox-launcher karma-jasmine karma-junit-reporter \
                  karma-less-preprocessor karma-ng-html2js-preprocessor \
                  karma-phantomjs-launcher less less-plugin-clean-css \
                  path phantomjs-prebuilt shelljs svgo uglify-js watch \
                  watchify --save-dev

    > fsevents@1.1.3 install ./node_modules/fsevents
    > node install
    
    [fsevents] Success: "./node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse.node" already installed
    Pass --update-binary to reinstall or --build-from-source to recompile
    
    > uws@0.14.5 install ./node_modules/uws
    > node-gyp rebuild > build_log.txt 2>&1 || exit 0
    
    
    > phantomjs-prebuilt@2.1.16 install ./node_modules/phantomjs-prebuilt
    > node install.js
    
    Considering PhantomJS found at /usr/local/bin/phantomjs
    Found PhantomJS at /usr/local/bin/phantomjs ...verifying
    Writing location.js file
    PhantomJS is already installed on PATH at /usr/local/bin/phantomjs
    npm WARN blackjack-angularjs@0.0.0 license should be a valid SPDX license expression
    
    + jshint@2.9.5
    + browserify-shim@3.8.14
    + glob@7.1.2
    + jasmine-core@2.9.1
    + http-server@0.11.1
    + jasmine-jquery@2.1.1
    + beefy@2.1.8
    + browserify@15.2.0
    + karma-browserify@5.1.3
    + karma-coverage@1.1.1
    + karma@2.0.0
    + budo@11.0.1
    + karma-firefox-launcher@1.1.0
    + karma-chrome-launcher@2.2.0
    + angular-mocks@1.6.8
    + karma-jasmine@1.1.1
    + karma-junit-reporter@1.2.0
    + less@2.7.3
    + karma-phantomjs-launcher@1.0.4
    + karma-ng-html2js-preprocessor@1.0.0
    + path@0.12.7
    + less-plugin-clean-css@1.5.1
    + shelljs@0.8.1
    + phantomjs-prebuilt@2.1.16
    + svgo@1.0.3
    + watch@1.0.2
    + uglify-js@3.3.9
    + karma-less-preprocessor@0.3.3
    + watchify@3.10.0
    added 967 packages in 68.794s