//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    },

    lessPreprocessor: {
      options: {
        paths: [ 'app/style' ]
      },
      transformPath: function(path) {
        return path.replace(/\.less$/, '.compiled.css');
      }
    },

    files: [
      'app/index.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/main/mainView.html',
      'app/style/*.css',
      'app/style/*.less',
      'test/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    preprocessors: {
      'app/*.js': [ 'browserify' ],
      'app/style/*.less': [ 'less' ],
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
