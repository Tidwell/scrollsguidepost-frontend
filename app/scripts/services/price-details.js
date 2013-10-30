'use strict';

angular.module('scrollsguidepostFrontendApp')
	.factory('priceDetails', function($http) {
		var priceDetails = {
			details: {}
		};

		return {
			get: function() {
				if (!priceDetails.details.length) {
					$http({method: 'get', url: 'dummy-data/price-details.json'}).success(function(data){
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