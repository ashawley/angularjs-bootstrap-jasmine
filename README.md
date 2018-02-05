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

Install karma command-line tool:

    $ npm install -g karma-cli
    /usr/local/bin/karma -> /usr/local/lib/node_modules/karma-cli/bin/karma
    + karma-cli@1.0.1
    added 1 packages in 2.385s

Initialize test suite:

    $ karma init
    
    Which testing framework do you want to use ?
    Press tab to list possible options. Enter to move to the next question.
    > jasmine
    
    Do you want to use Require.js ?
    This will add Require.js plugin.
    Press tab to list possible options. Enter to move to the next question.
    > no
    
    Do you want to capture any browsers automatically ?
    > Press tab to list possible options. Enter empty string to move to the next question. 
    > Chrome
    > Firefox
    > PhantomJS
    > 
    
    What is the location of your source and test files ?
    You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
    Enter empty string to move to the next question.
    > app/js/index.js
    > node_modules/angular-mocks/angular-mocks.js
    > test/js/**/*Spec.js
    > 
    
    Should any of the files included by the previous patterns be excluded ?
    You can use glob patterns, eg. "**/*.swp".
    Enter empty string to move to the next question.
    > **/*~
    > 
    
    Do you want Karma to watch all the files and run the tests on change ?
    Press tab to list possible options.
    > yes
    
    
    Config file generated at "./karma.conf.js".

Run the test suite:

    $ npm test
    
    > blackjack-angularjs@0.0.0 pretest ./
    > npm install
    up to date in 6.162s
    
    > blackjack-angularjs@0.0.0 test ./
    > karma start ./karma.conf.js --single-run
    
    30 01 2018 01:17:37.623:INFO [framework.browserify]: bundle built
    30 01 2018 01:17:37.668:WARN [karma]: Port 9876 in use
    30 01 2018 01:17:37.670:INFO [karma]: Karma v2.0.0 server started at http://0.0.0.0:9877/
    30 01 2018 01:17:37.670:INFO [launcher]: Launching browsers Chrome, Firefox, PhantomJS with unlimited concurrency
    30 01 2018 01:17:37.729:INFO [launcher]: Starting browser Chrome
    30 01 2018 01:17:37.744:INFO [launcher]: Starting browser Firefox
    30 01 2018 01:17:37.753:INFO [launcher]: Starting browser PhantomJS
    30 01 2018 01:17:40.226:INFO [Chrome 63.0.3239 (Mac OS X 10.12.3)]: Connected on socket RMsck1NEbw5TYKiNAAAA with id 42191936
    Chrome 63.0.3239 (Mac OS X 10.12.3): Executed 3 of 3 SUCCESS (0.022 secs / 0 secs)
    30 01 2018 01:17:42.860:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket GChrome 63.0.3239 (Mac OS X 10.12.3): Executed 3 of 3 SUCCESS (0.022 secs / 0 secs)
    PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 3 of 3 SUCCESS (0.017 secs / 0 secs)
    Chrome 63.0.3239 (Mac OS X 10.12.3): Executed 3 of 3 SUCCESS (0.022 secs / 0 secs)
    PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 3 of 3 SUCCESS (0.017 secs / 0 secs)
    Firefox 57.0.0 (Mac OS X 10.12.0): Executed 3 of 3 SUCCESS (0.041 secs / 0 secs)
    TOTAL: 9 SUCCESS

Automatically-triggered test runner:

    $ npm run watch:test
    
    > blackjack-angularjs@0.0.0 watch:test ./
    > karma start --auto-watch

Build task:

    $ npm run build
    
    > blackjack-angularjs@0.0.0 prebuild ./
    > npm install && npm run lint
    
    
    > blackjack-angularjs@0.0.0 postinstall ./
    > npm run copy-libs
    
    > blackjack-angularjs@0.0.0 copy-libs ./
    > node scripts/copy-libs.js
    
    up to date in 7.17s
    
    > blackjack-angularjs@0.0.0 lint ./
    > jshint ./app/js --exclude ./app/dist
    
    > blackjack-angularjs@0.0.0 build ./
    > npm run build:browserify && npm run build:uglify && npm run build:less
    
    > blackjack-angularjs@0.0.0 build:browserify ./
    > browserify ./app/js/index.js -o ./app/dist/js/index.js

    > blackjack-angularjs@0.0.0 build:uglify ./
    > uglifyjs ./app/dist/js/index.js -c -o ./app/dist/js/index.min.js
    
    > blackjack-angularjs@0.0.0 build:less ./
    > lessc --clean-css ./app/style/index.less ./app/dist/style/index.css

End-to-end testing requires protractor:

    $ npm install -g protractor
    /usr/local/bin/protractor -> /usr/local/lib/node_modules/protractor/bin/protractor
    /usr/local/bin/webdriver-manager -> /usr/local/lib/node_modules/protractor/bin/webdriver-manager
    + protractor@5.3.0
    added 136 packages in 13.834s
    
    $ webdriver-manager update
    [17:51:06] I/file_manager - creating folder /usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium
    [17:51:08] I/update - geckodriver: unzipping geckodriver-v0.19.1.tar.gz
    [17:51:09] I/update - geckodriver: setting permissions to 0755 for /usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.19.1
    [17:51:09] I/update - chromedriver: unzipping chromedriver_2.35.zip
    [17:51:09] I/update - chromedriver: setting permissions to 0755 for /usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.35

    $ webdriver-manager start
    [17:52:04] I/start - java -Dwebdriver.chrome.driver=/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.35 -Dwebdriver.gecko.driver=/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.19.1 -jar /usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.8.1.jar -port 4444
    [17:52:05] I/start - seleniumProcess.pid: 17731
    17:52:06.689 INFO - Selenium build info: version: '3.8.1', revision: '6e95a6684b'
    17:52:06.690 INFO - Launching a standalone Selenium Server
    2018-02-04 17:52:07.408:INFO::main: Logging initialized @2136ms to org.seleniumhq.jetty9.util.log.StdErrLog
    17:52:07.634 INFO - Using `new FirefoxOptions()` is preferred to `DesiredCapabilities.firefox()`
    17:52:07.706 INFO - Using `new ChromeOptions()` is preferred to `DesiredCapabilities.chrome()`
    17:52:07.731 INFO - Using `new EdgeOptions()` is preferred to `DesiredCapabilities.edge()`
    17:52:07.738 INFO - Driver class not found: com.opera.core.systems.OperaDriver
    17:52:07.738 INFO - Using `new OperaOptions()` is preferred to `DesiredCapabilities.operaBlink()`
    17:52:07.745 INFO - Using `new SafariOptions()` is preferred to `DesiredCapabilities.safari()`
    17:52:07.749 INFO - Driver class not found: org.openqa.selenium.phantomjs.PhantomJSDriver
    17:52:07.918 INFO - Driver provider class org.openqa.selenium.ie.InternetExplorerDriver registration is skipped:
     registration capabilities Capabilities {browserName: internet explorer, ensureCleanSession: true, platform: WINDOWS, version: } does not match the current platform MAC
    17:52:07.919 INFO - Driver provider class org.openqa.selenium.edge.EdgeDriver registration is skipped:
     registration capabilities Capabilities {browserName: MicrosoftEdge, platform: WINDOWS, version: } does not match the current platform MAC
    17:52:08.130 INFO - Using `new ChromeOptions()` is preferred to `DesiredCapabilities.chrome()`
    17:52:08.132 INFO - Using `new EdgeOptions()` is preferred to `DesiredCapabilities.edge()`
    17:52:08.132 INFO - Using `new FirefoxOptions()` is preferred to `DesiredCapabilities.firefox()`
    17:52:08.133 INFO - Using `new OperaOptions()` is preferred to `DesiredCapabilities.operaBlink()`
    17:52:08.133 INFO - Using `new SafariOptions()` is preferred to `DesiredCapabilities.safari()`
    17:52:08.177 INFO - Using the passthrough mode handler
    2018-02-04 17:52:08.335:INFO:osjs.Server:main: jetty-9.4.7.v20170914
    2018-02-04 17:52:08.443:WARN:osjs.SecurityHandler:main: ServletContext@o.s.j.s.ServletContextHandler@1caa0244{/,null,STARTING} has uncovered http methods for path: /
    2018-02-04 17:52:08.456:INFO:osjsh.ContextHandler:main: Started o.s.j.s.ServletContextHandler@1caa0244{/,null,AVAILABLE}
    2018-02-04 17:52:08.580:INFO:osjs.AbstractConnector:main: Started ServerConnector@34bde49d{HTTP/1.1,[http/1.1]}{0.0.0.0:4444}
    2018-02-04 17:52:08.581:INFO:osjs.Server:main: Started @3310ms
    17:52:08.582 INFO - Selenium Server is up and running

You can start the server with:

    $ npm run watch:start
    
    > blackjack-angularjs@0.0.0 watch:start ./blackjack-angularjs
    > npm run start:budo
    
    
    > blackjack-angularjs@0.0.0 start:budo ./blackjack-angularjs
    > budo app/js/index.js:dist/js/index.js -v -H localhost -p 8080 -d ./app --open --live -- -o app/dist/js/index.js
    
    [0002] info  Server running at http://localhost:8080/ (connect)
    [0002] info  LiveReload running
    [0003] 222ms         0B GET    200 /
