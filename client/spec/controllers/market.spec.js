describe('Controller: MarketCtrl is loaded,', function() {
  'use strict';
  var scope, ctrl, httpBackend;

  beforeEach(module('loppemarkedApp'));

  describe('and data is return from market api,', function() {
    beforeEach(
      inject(
        function($controller, $rootScope, Market, $httpBackend) {
          httpBackend = $httpBackend;
          scope = $rootScope.$new();
          ctrl = $controller('MarketCtrl', {
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

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it('should attach a list of two markets to the scope', function() {
      httpBackend.flush();

      expect(scope.markets).toBeArrayOfSize(2);
      expect(scope.markets).toBeArrayOfObjects();
    });

    it('should attach market object to the scope', function() {
      httpBackend.flush();

      expect(scope.markets[0].name).toBe('test');
      expect(scope.markets[1].name).toBe('test1');
    });

    it('should mark the first market as selected', function() {
      httpBackend.flush();

      expect(scope.markets[0]).toBe(scope.selected);
    });

    describe('and the user clicks on a market item,', function() {
      var clickedItem = null;

      beforeEach(function() {
        httpBackend.flush();

        clickedItem = scope.markets[1];
        scope.selectMarket(clickedItem);
      });

      it(',should select the clicked item', function() {
        expect(scope.selected).toEqual(clickedItem);
      });
    });
  });

  describe('and no data is return from market api,', function() {
    beforeEach(
      inject(
        function($controller, $rootScope, Market, $httpBackend) {
          httpBackend = $httpBackend;
          scope = $rootScope.$new();
          ctrl = $controller('MarketCtrl', {
            $scope: scope,
            Market: Market
          });

          var mockData = [];
          var url = '/api/market';
          httpBackend.whenGET(url).respond(mockData);
        }
      )
    );

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it(',should attach an empty list to markets', function() {
      httpBackend.flush();

      expect(scope.markets).toBeEmptyArray();
    });

    it('should not hava a selected market', function() {
      httpBackend.flush();

      expect(scope.selected).toEqual(null);
    });
  });
});
