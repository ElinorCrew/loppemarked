angular.module('loppemarkedApp').factory('Market', function ($resource) {
    'use strict';
    return $resource('/api/market/:id');
});
