'use strict';

angular.module('loppemarkedApp')
    .controller('MainCtrl', function ($scope) {
        $scope.markets = [{
            'name': 'Briskeby Janitsar loppemarked'
        }, {
            'name': 'Dælenenga idrettskrets loppebonanza'
        }, {
            'name': 'Gryners Gate velforenings kvartale gatesalg'
        }];
    });
