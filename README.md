AngularJS 1.x testing with Jasmine
==================================

[![Build Status](https://travis-ci.org/ashawley/angularjs-bootstrap-jasmine.svg?branch=hello-world)](https://travis-ci.org/ashawley/angularjs-bootstrap-jasmine)

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
    
    $ npm test

    $ karma start
    INFO [karma]: Karma v0.13.22 server started at http://localhost:9877/
    TOTAL: 18 SUCCESS
    
    $ karma start --browsers Chrome

- https://docs.angularjs.org/tutorial
- https://docs.angularjs.org/guide
- http://bguiz.github.io/js-standards/angularjs/naming/
