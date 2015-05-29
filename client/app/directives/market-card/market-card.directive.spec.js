'use strict';

describe('Directive: marketCard', function() {

  beforeEach(module('loppemarkedApp'));
  beforeEach(module('templates'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<market-card></market-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.length).toBe(1);
  }));


});
