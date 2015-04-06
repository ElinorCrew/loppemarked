/* global angular*/

(function() {
  'use strict';

  angular.module('loppemarkedApp', [
      'ngMaterial',
      'ngResource',
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
