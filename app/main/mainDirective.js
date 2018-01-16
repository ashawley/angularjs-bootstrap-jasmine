'use strict';

angular.module('mainModule')
  .directive('mainDirective', function () {
    return {
      // template: '<h1>{{greeting}}</h1>'
      templateUrl: 'main/mainView.html'
    };
  }
);
