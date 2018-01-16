'use strict';

angular.module('myApp')
  .config(function (mainProviderProvider) {
    mainProviderProvider.setGreeting('HELLO, WORLD!');
  }
);
