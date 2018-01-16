'use strict';

describe('mainComponent', function() {

  beforeEach(module('mainModule'));

  it('greeting', inject(function($componentController, mainProvider) {

    var ctrl = $componentController('mainComponent', {}, {greeting: "Hello?"});

    expect(ctrl.greeting).toBe('Hello?');

  }));

});
