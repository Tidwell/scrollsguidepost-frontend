'use strict';

angular.module('scrollsguidepostFrontendApp')
	.factory('cards', function($http) {
		var cards = {
			cards: []
		};

		return {
			get: function() {
				if (!cards.cards.length) {
					$http({method: 'GET', url: 'dummy-data/cards.json'}).success(function(data){
						cards.cards = data.data;
					});
				}
				return cards;
			}
		};
	});