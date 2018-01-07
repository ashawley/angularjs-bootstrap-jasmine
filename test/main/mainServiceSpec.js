'use strict';

describe('mainService', function() {

  beforeEach(module('mainModule'));

  it('setGreeting', inject(function(mainService) {
      mainService.setGreeting('HELLO, WORLD!')
  }));

  it('getGreeting', inject(function(mainService) {
      expect(mainService.getGreeting()).toBeUndefined();
  }));

  it('setGreeting.getGreeting', inject(function(mainService) {
      mainService.setGreeting('Hello, world!')
      expect(mainService.getGreeting()).toBe('Hello, world!');
  }));

});
