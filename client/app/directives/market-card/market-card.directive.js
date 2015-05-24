  (function() {
    'use strict';

    angular.module('loppemarkedApp')
      .directive('marketCard', function() {
        return {
          templateUrl: 'app/directives/market-card/market-card.html',
          restrict: 'E'
        };
      });
  })();
