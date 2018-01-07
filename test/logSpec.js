'use strict';

describe('$log', function() {
  var $log;
  beforeEach(inject(['$log', function(log) {
    $log = log;
  }]));

  afterEach(inject(function($log) {
    $log.reset();
  }));

  it('log', function() {
    $log.log('Hello, world!');
    expect($log.log.logs).toContain(['Hello, world!']);
  });

  it('info', function() {
    $log.info('Hello, world!');
    expect($log.info.logs).toContain(['Hello, world!']);
  });

  it('error', function() {
    $log.info('Goodbye, world!');
    expect($log.info.logs).toContain(['Goodbye, world!']);
  });

});
