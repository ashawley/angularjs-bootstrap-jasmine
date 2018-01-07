'use strict';

describe('mainController', function() {

  beforeEach(module('mainModule'));

  it('greeting', inject(function($controller, mainProvider) {
    var scope = {};

    // mainProvider.setGreeting('Hello, world!');
    var ctrl = $controller('mainController', {$scope: scope});

    expect(scope.greeting).toBe('Hello, world!');
  }));

});
