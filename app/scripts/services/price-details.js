'use strict';

angular.module('scrollsguidepostFrontendApp')
	.factory('priceDetails', function($http) {
		var priceDetails = {
			details: {}
		};

		return {
			get: function() {
				delete $http.defaults.headers.common['X-Requested-With'];
				if (!priceDetails.details.length) {
					$http({method: 'get', url: 'http://a.scrollsguide.com/prices?details'}).success(function(data){
						data.data.forEach(function(offer) {
							if (!priceDetails.details[offer.id]) {
								priceDetails.details[offer.id] = [];
							}
							priceDetails.details[offer.id].push(offer);
						});
					});
				}
				return priceDetails;
			}
		};
	});