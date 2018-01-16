'use strict';

angular.module('mainModule')
  .component('mainComponent', {
    template: '<h1>{{$ctrl.greeting}}</h1>',
    controller: function(mainProvider) {
      this.greeting = mainProvider.greeting();
    },
    bindings: {
      greeting: '='
    }
  });
