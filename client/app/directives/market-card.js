(function() {
  'use strict';

  angular.module('loppemarkedApp')
    .directive('mdMarketCard', function mdMarketCardDirective() {
      return {
        restrict: 'E',
        templateUrl: 'views/market-card.html'
      };
    });
})();
