//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    },

    files: [
      'app/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/main/mainView.html',
      'test/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    preprocessors: {
      'app/*.js': [ 'browserify' ],
      'app/main/mainView.html': ['ng-html2js']
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
