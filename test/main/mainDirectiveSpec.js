'use strict';

describe('mainDirective', function() {

  beforeEach(module('mainModule'));
  beforeEach(module('main/mainView.html'));

  var element;
  var scope;
  beforeEach(inject(function($rootScope, $compile) {
    var directive = angular.element("<main-directive></main-directive>");
    scope = $rootScope.$new();
    element = $compile(directive)(scope);
    scope.greeting = 'Hello, world!'
    scope.$apply();
  }));

  it('h1.text', function() {
    var h1 = element.find('h1');
    expect(h1.text()).toBe('Hello, world!');
  });

});
