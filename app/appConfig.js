'use strict';

angular.module('myApp')
  .config(function (mainProvider) {
    mainProvider.setGreeting('HELLO, WORLD!');
  }
);
