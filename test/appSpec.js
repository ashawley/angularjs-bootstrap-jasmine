'use strict';

describe('app', function() {

  beforeEach(module('myApp'));

  it('angular', function() {
    expect(angular).toBeDefined();
  });

  it('jQuery', function() {
    expect($).toBeDefined();
  });

  it('bootstrap', function() {
    expect($.fn.affix).toBeDefined();
    expect($.fn.alert).toBeDefined();
    expect($.fn.button).toBeDefined();
    expect($.fn.carousel).toBeDefined();
    expect($.fn.collapse).toBeDefined();
    expect($.fn.dropdown).toBeDefined();
    expect($.fn.modal).toBeDefined();
    expect($.fn.popover).toBeDefined();
    expect($.fn.scrollspy).toBeDefined();
    expect($.fn.tab).toBeDefined();
    expect($.fn.tooltip).toBeDefined();
  });

});
