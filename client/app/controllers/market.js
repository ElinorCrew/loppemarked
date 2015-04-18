(function() {
  'use strict';

  angular.module('loppemarkedApp')
    .controller('MarketCtrl', function($scope, Market, $mdSidenav) {

      $scope.selected = null;
      $scope.markets = [];

      Market.query(function(markets) {
        $scope.markets = [].concat(markets);
        if ($scope.markets.length > 0) {
          $scope.selected = markets[0];
        }
      });

      $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };

      $scope.selectMarket = function(market) {
        $scope.selected = angular.isNumber(market) ? $scope.markets[market] : market;
      };
    });
})();
