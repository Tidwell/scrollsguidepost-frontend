'use strict';

angular.module('scrollsguidepostFrontendApp')
	.factory('prices', function($http) {
		var prices = {
			prices: []
		};

		return {
			get: function() {
				if (!prices.prices.length) {
					$http({method: 'get', url: 'dummy-data/prices.json'}).success(function(data){
						prices.prices = data.data;
					});
				}
				return prices;
			}
		};
	});