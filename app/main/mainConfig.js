'use strict';

angular.module('mainModule')
  .config(function (mainProvider) {
    mainProvider.setGreeting('Hello, world!');
  }
);
