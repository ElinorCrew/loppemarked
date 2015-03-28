'use strict';

/**
 * @ngdoc function
 * @name loppemarkedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loppemarkedApp
 */
angular.module('loppemarkedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
