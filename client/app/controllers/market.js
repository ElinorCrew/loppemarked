(function() {
  'use strict';

  angular.module('loppemarkedApp')
    .controller('MarketCtrl', function($scope, Market, $mdSidenav) {
      var self = this;

      self.selected = null;
      self.markets = [];

      Market.query(function(markets) {
        self.markets = [].concat(markets);
        if (markets) {
          self.selected = markets[0];
        }
      });

      self.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };

      self.selectMarket = function(market) {
        self.selected = angular.isNumber(market) ? self.markets[market] : market;
      };
    });
})();
