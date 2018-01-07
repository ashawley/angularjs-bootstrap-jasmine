'use strict';

angular.module('mainModule')
  .provider('mainProvider', mainProvider);

function mainProvider() {
  var greeting;
  return {
    setGreeting: function(value) {
      greeting = value;
    },
    $get: function() {
      return {
        greeting: function() {
          return greeting;
        }
      };
    }
  };
}
