'use strict';

angular.module('scrollsguidepostFrontendApp')
	.factory('prices', function($http) {
		var prices = {
			prices: []
		};

		return {
			get: function() {
				delete $http.defaults.headers.common['X-Requested-With'];
				if (!prices.prices.length) {
					$http({method: 'get', url: 'http://a.scrollsguide.com/prices'}).success(function(data){
						prices.prices = data.data;
					});
				}
				return prices;
			}
		};
	});