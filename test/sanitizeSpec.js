'use strict';

describe('sanitize', function() {

  beforeEach(module('ngSanitize'));

  it('$sanitize', inject(function($sanitize) {
    expect($sanitize('<>&"')).toBe('&lt;&gt;&amp;&#34;');
  }));

  it('linky', inject(function($filter) {
    var html = '&lt;<a href="http://angularjs.org/">http://angularjs.org/</a>&gt;';
    expect($filter('linky')('<http://angularjs.org/>')).toBe(html);
  }));

});
