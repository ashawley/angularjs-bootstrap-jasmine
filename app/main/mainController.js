'use strict';

angular.module('mainModule').controller('mainController',
  function ($scope, mainProvider) {
    $scope.greeting = mainProvider.greeting();
    this.greeting = mainProvider.greeting();
  }
);
