/* global angular*/

(function() {
  'use strict';

  angular.module('loppemarkedApp', [
      'ngMaterial',
      'ngMdIcons',
      'ngResource',
      'ngRoute',
      'leaflet-directive'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MarketCtrl'
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
