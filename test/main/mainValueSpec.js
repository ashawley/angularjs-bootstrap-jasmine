'use strict';

describe('mainValue', function() {
  beforeEach(module('mainModule'));

  it('value', inject(function(mainValue) {
      expect(mainValue).toEqual('Hello, world!');
  }));

});
