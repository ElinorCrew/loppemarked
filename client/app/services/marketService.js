(function () {
    'use strict';

    angular.module('loppemarkedApp')
        .factory('Market', function ($resource) {
            return $resource('/api/market/:id');
        });
})();
