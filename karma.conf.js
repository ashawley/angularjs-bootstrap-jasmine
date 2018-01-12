//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'app/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    preprocessors: {
      'app/*.js': [ 'browserify' ]
    },

    frameworks: [
      'browserify',
      'jasmine'
    ],

    browsers: [
      'Chrome', 
      'Firefox',
      'PhantomJS'
    ],

    reporters: ['progress'],

    browserify: {
      debug: true
    }

  });
};
