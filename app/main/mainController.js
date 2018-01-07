'use strict';

angular.module('mainModule').controller('mainController',
  function ($scope, mainProvider) {
    $scope.greeting = 'Hello, world!'; // mainProvider.greeting();
  }
);
