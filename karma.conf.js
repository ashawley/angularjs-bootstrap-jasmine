//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'app/lib/jquery/dist/jquery.js',
      'app/lib/angular/angular.js',
      'app/lib/angular-route/angular-route.js',
      'app/lib/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/lib/bootstrap/dist/js/bootstrap.js',
      'app/main/mainModule.js',
      'app/main/mainValue.js',
      'app/main/mainService.js',
      'app/main/mainProvider.js',
      'app/main/mainFilter.js',
      'app/main/mainController.js',
      'app/main/mainDirective.js',
      'app/app.js',
      'test/**/*Spec.js'
    ],

    exclude: [
      '**/*~'
    ],

    frameworks: ['jasmine'],

    browsers: [
      'Chrome', 
      'Firefox',
      'PhantomJS'
    ],

    reporters: ['progress'],

  });
};
