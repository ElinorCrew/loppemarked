(function() {
  'use strict';

  angular.module('loppemarkedApp')
    .directive('mdMarketCard', mdMarketCardDirective);

  function mdMarketCardDirective() {
    return {
      restrict: 'E',
      templateUrl: 'views/market-card.html'
    };
  }
})();
