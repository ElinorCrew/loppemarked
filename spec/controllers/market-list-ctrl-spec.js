describe('Controller: MarketListCtrl', function () {
    'use strict';
    var MarketListCtrl,
        scope;

    beforeEach(module('market-app'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MarketListCtrl = $controller('MarketListCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of three markets to the scope', function () {
        expect(scope.markets.length).toBe(3);
    });
});