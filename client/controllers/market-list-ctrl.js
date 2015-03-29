var phonecatApp = angular.module('market-app', []);

phonecatApp.controller('MarketListCtrl', function ($scope) {
    $scope.markets = [
        {'name': 'Briskeby Janitsar loppemarked'},
        {'name': 'Dælenenga idrettskrets loppebonanza'},
        {'name': 'Gryners Gate velforenings kvartale gatesalg'}
    ];
});