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
