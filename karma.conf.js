module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: [
      'browserify',
      'jasmine'
    ],

    files: [
      'app/js/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/js/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    preprocessors: {
      'app/js/**/*.js': [ 'browserify' ],
      'app/style/**/*.less': [ 'less' ]
    },

    reporters: [
      'progress',
      'junit'
    ],

    junitReporter: {
      'outputDir': 'test/reports',
      'outputFile': 'junit_results.xml',
      'useBrowserName': true
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/js/'
    },

    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],

    browserify: {
      debug: true
    }

  })
}
