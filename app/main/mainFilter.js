'use strict';

angular.module('mainModule')
  .filter('mainFilter', function () {
    return function(text) {
      return text.toUpperCase();
    };
  }
);
