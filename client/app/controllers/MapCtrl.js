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
        defaults: {
            scrollWheelZoom: false
        }
    });
    });
})();
