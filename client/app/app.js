/* global angular*/

(function() {
  'use strict';

  angular.module('loppemarkedApp', [
      'ngMaterial',
      'ngResource',
      'ngRoute',
      'leaflet-directive'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/map.html',
          controller: 'MapCtrl'
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
