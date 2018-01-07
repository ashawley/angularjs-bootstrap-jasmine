'use strict';

describe('mainFilter', function() {

  beforeEach(module('mainModule'));

  it('mainFilter', inject(function($filter) {
      var mainFilter = $filter('mainFilter')
      expect(mainFilter('hello, world!')).toBe('HELLO, WORLD!');
  }));

});
