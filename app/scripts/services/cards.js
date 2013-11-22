'use strict';

angular.module('scrollsguidepostFrontendApp')
	.factory('cards', function($http) {
		var cards = {
			cards: []
		};

		return {
			get: function() {
				delete $http.defaults.headers.common['X-Requested-With'];
				if (!cards.cards.length) {
					$http({method: 'GET', url: 'http://a.scrollsguide.com/scrolls'}).success(function(data){
						cards.cards = data.data;
					});
				}
				return cards;
			}
		};
	});