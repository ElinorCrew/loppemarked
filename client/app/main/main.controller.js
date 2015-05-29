'use strict';

angular.module('loppemarkedApp')
.controller('MainCtrl', function ($scope, $timeout, leafletData) {
	$scope.message = 'Hello';

	$scope.$on( "$viewContentLoaded", function(event) {
		leafletData.getMap().then(function(map){
			$timeout(function() {
				map.invalidateSize(true);				
			})
		});
	});
});
