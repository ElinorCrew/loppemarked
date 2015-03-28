'use strict';

/**
 * @ngdoc function
 * @name loppemarkedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loppemarkedApp
 */
angular.module('loppemarkedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
