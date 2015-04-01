describe('Controller: MainCtrl', function () {
    'use strict';
    var scope, ctrl, httpBackend;

    beforeEach(module('loppemarkedApp'));

    beforeEach(
        inject(
            function ($controller, $rootScope, Market, $httpBackend) {
                httpBackend = $httpBackend;
                scope = $rootScope.$new();
                ctrl = $controller('MainCtrl', {
                    $scope: scope,
                    Market: Market
                });

                var mockData = [{
                    name: 'test'
                }, {
                    name: 'test1'
                }];
                var url = '/api/market';
                httpBackend.whenGET(url).respond(mockData);
            }
        )
    );

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should attach a list of two markets to the scope', function () {
        httpBackend.flush();

        expect(scope.markets.length).toBe(2);
    });

    it('should attach market object to the scope', function () {
        httpBackend.flush();

        expect(scope.markets[0].name).toBe('test');
        expect(scope.markets[1].name).toBe('test1');
    });
});
