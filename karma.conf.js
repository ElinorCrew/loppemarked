// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', 'jasmine-matchers'],

    // list of files / patterns to load in the browser
    files: [
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-animate/angular-animate.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-aria/angular-aria.js',
      'client/bower_components/angular-material/angular-material.js',
      'client/bower_components/leaflet/dist/leaflet.js',
      'client/bower_components/leaflet/dist/leaflet-src.js',
      'client/bower_components/angular-leaflet-directive/dist/angular-leaflet-directive.js',
      'client/bower_components/angular-material-icons/angular-material-icons.min.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/app/**/*.html',
      'client/components/**/*.html',
      'client/app/app.js',
      'client/app/**/*.js',
      'client/components/**/*.js'
    ],

    preprocessors: {},

    ngHtml2JsPreprocessor: {},

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers'
    ],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
