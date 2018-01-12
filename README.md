AngularJS 1.x testing with Jasmine
==================================

[![Build Status](https://travis-ci.org/ashawley/angularjs-bootstrap-jasmine.svg?branch=browserify)](https://travis-ci.org/ashawley/angularjs-bootstrap-jasmine)

    $ git clone git@github.com/ashawley/angularjs-bootstrap-jasmine.git -o upstream
    
    $ npm install
    added 469 packages in 20.186s
    
    $ npm install -g karma-cli
    /usr/local/bin/karma -> /usr/local/lib/node_modules/karma-cli/bin/karma
    + karma-cli@1.0.1
    added 3 packages in 3.408s
    
    $ npm start
    
    > angularjs-bootstrap-jasmine@0.0.0 start ./angularjs-bootstrap-jasmine
    > http-server -a localhost -p 8080 -c-1 ./app
    
    Starting up http-server, serving ./app
    Available on:
      http://localhost:8080
    Hit CTRL-C to stop the server
    
    $ npm run watch:start
    
    > angularjs-bootstrap-jasmine@0.0.0 watch:start ./angularjs-bootstrap-jasmine
    > budo app/index.js:dist/index.js -v -H localhost -p 8080 -d ./app --open --live -- -o app/dist/index.js
    
    [0001] info  Server running at http://localhost:8080/ (connect)
    [0001] info  LiveReload running
    [0003] 1331ms        0B GET    200 /budo/livereload.js
    [0005] 3607ms     3.3MB (browserify)
    [0005] 2845ms        0B GET    200 /dist/index.js

    $ npm test

    $ npm run watch:test
    INFO [karma]: Karma v0.13.22 server started at http://localhost:9877/
    TOTAL: 18 SUCCESS
    
    $ npm run watch::test -- --browsers Chrome

    $ npm run build
    
    > angularjs-bootstrap-jasmine@0.0.0 prebuild ./angularjs-bootstrap-jasmine
    > npm run lint
    
    
    > angularjs-bootstrap-jasmine@0.0.0 lint ./angularjs-bootstrap-jasmine
    > jshint ./app --exclude ./app/dist
    
    
    > angularjs-bootstrap-jasmine@0.0.0 build ./angularjs-bootstrap-jasmine
    > npm run build:browserify && npm run build:uglifyjs
    
    
    > angularjs-bootstrap-jasmine@0.0.0 build:browserify ./angularjs-bootstrap-jasmine
    > browserify ./app/index.js -o ./app/dist/index.js
    
    
    > angularjs-bootstrap-jasmine@0.0.0 build:uglifyjs ./angularjs-bootstrap-jasmine
    > uglifyjs ./app/dist/index.js -c -o ./app/dist/index.min.js

- https://scotch.io/tutorials/getting-started-with-browserify
- https://github.com/nikku/karma-browserify
- https://github.com/mattdesl/budo
- https://gist.github.com/busypeoples/e4ec7e7c1f1a753050dd