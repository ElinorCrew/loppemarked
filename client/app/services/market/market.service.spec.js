'use strict';

describe('Service: market', function() {

  // load the service's module
  beforeEach(module('loppemarkedApp'));

  // instantiate service
  var market;
  beforeEach(inject(function(Market) {
    market = Market;
  }));

  it('should do something', function() {
    expect(!!market).toBe(true);
  });

});
