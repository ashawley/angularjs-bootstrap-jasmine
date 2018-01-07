'use strict';

describe('mainProvider', function() {

  var mainProviderProvider;
  beforeEach(function() {
    module('mainModule', function (_mainProviderProvider_) {
      mainProviderProvider = _mainProviderProvider_;
    });
  });

  var mainProvider;
  beforeEach(inject(function(_mainProvider_) {
    mainProvider = _mainProvider_;
  }));

  it('setGreeting', function() {
      mainProviderProvider.setGreeting('HELLO, WORLD!');
  });

  it('greeting', function() {
    expect(mainProvider.greeting()).toBeUndefined();
  });

  it('setGreeting greeting', function() {
    mainProviderProvider.setGreeting('Hello, world!')
    expect(mainProvider.greeting()).toBe('Hello, world!');
  });

});
