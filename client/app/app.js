/* global angular*/

(function() {
  'use strict';

  angular.module('loppemarkedApp', [
      'ngMaterial',
      'ngMdIcons',
      'leaflet-directive',
      'ngResource',
      'ngSanitize',
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
