'use strict';

angular.module('mainModule')
  .factory('mainService', function() {
    var greeting;
    return {
      setGreeting: function(value) {
        greeting = value;
      },
      getGreeting: function() {
        return greeting;
      }
    };
  }
);
