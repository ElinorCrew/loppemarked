(function () {
    'use strict';

    angular.module('loppemarkedApp')
        .controller('MainCtrl', function ($scope, Market) {
            Market.query(function (data) {
                $scope.markets = data;
            });
        });
})();
