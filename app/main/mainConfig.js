'use strict';

angular.module('mainModule')
  .config(function (mainProviderProvider) {
    mainProviderProvider.setGreeting('Hello, world!');
  }
);
