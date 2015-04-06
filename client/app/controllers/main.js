(function() {
  'use strict';

  angular.module('loppemarkedApp')
    .controller('MainCtrl', function($scope, Market, $mdSidenav) {
      Market.query(function(data) {
        $scope.markets = data;
      });
      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };
    });
})();
