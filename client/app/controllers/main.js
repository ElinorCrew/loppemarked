angular.module('loppemarkedApp')
    .controller('MainCtrl', function ($scope, Market) {
        'use strict';
        Market.query(function (data) {
            $scope.markets = data;
        });
    });
