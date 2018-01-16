//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    },

    files: [
      'app/lib/jquery/dist/jquery.js',
      'app/lib/angular/angular.js',
      'app/lib/angular-route/angular-route.js',
      'app/lib/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/lib/bootstrap/dist/js/bootstrap.js',
      'app/main/mainModule.js',
      'app/main/mainConfig.js',
      'app/main/mainValue.js',
      'app/main/mainService.js',
      'app/main/mainProvider.js',
      'app/main/mainFilter.js',
      'app/main/mainController.js',
      'app/main/mainDirective.js',
      'app/main/mainComponent.js',
      'app/app.js',
      'app/appConfig.js',
      'app/main/mainView.html',
      'test/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    preprocessors: {
      'app/main/mainView.html': ['ng-html2js']
    },

    frameworks: ['jasmine'],

    browsers: [
      'Chrome', 
      'Firefox',
      'PhantomJS'
    ],

    reporters: ['progress'],

  });
};
