(function() {
  'use strict';

  angular.module('loppemarkedApp')
    .controller('MapCtrl', function($scope) {
      angular.extend($scope, {
        center: {
          lat: 59.91200869359693,
          lng: 10.725231170654297,
          zoom: 12
        },
        markers: {},
        defaults: {
          scrollWheelZoom: false
        }
      });

      $scope.$watch('mc.markets', function(newValue) {
        $scope.markers = {};
        angular.forEach(newValue, function(market) {
          var newMarker = $scope.makeMarker(market.name, market.lat, market.lng);
          $scope.markers[market.name] = newMarker;
        });
      });

      $scope.makeMarker = function(name, la, ln) {
        return {
          lat: la,
          lng: ln,
          message: name,
          focus: false,
        };
      };

    });
})();
