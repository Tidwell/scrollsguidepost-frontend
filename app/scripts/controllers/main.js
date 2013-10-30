'use strict';

angular.module('scrollsguidepostFrontendApp')
	.controller('MainCtrl', function($scope, cards, prices, priceDetails) {
		$scope.cards = cards.get();
		$scope.prices = prices.get();
		$scope.priceDetails = priceDetails.get();

		$scope.allCardData = [];
		$scope.searchTerm = '';
		$scope.sidebarActive = false;

		function aggregate() {
			$scope.allCardData = [];
			$scope.cards.cards.forEach(function(card) {
				var newCard = angular.copy(card);
				newCard.price = {
					buy: 0,
					sell: 0
				};
				$scope.prices.prices.forEach(function(priceData) {
					if (priceData.id === card.id) {
						newCard.price = priceData;
					}
				});
				newCard.price.details = $scope.priceDetails.details[card.id] ? $scope.priceDetails.details[card.id] : null;
				newCard.price.buyPop = 0;
				newCard.price.sellPop = 0;
				if ($scope.priceDetails.details[card.id]) {
					$scope.priceDetails.details[card.id].forEach(function(offer) {
						if (offer.type === 'SELL') {
							newCard.price.sellPop++;
						}
						if (offer.type === 'BUY') {
							newCard.price.buyPop++;
						}
					});
				}
				$scope.allCardData.push(newCard);
			});
		}

		$scope.dateFormat = function(secondsAgo) {
			if (!secondsAgo) {
				return 'never';
			}
			var mins = secondsAgo / 60;
			if (mins > 60) {
				var hrs = mins / 60;
				return Math.round(hrs) + (Math.round(hrs) === 1 ? ' hour ago' : ' hours ago');
			} else {
				if (mins < 1) {
					return 'moments ago';
				}
				return Math.round(mins) + ' minutes ago';
			}
		};

		$scope.details = function(card) {
			$scope.sidebarActive = true;
			$scope.activeCard = card;
		};

		$scope.prettyOfferType = function(offer) {
			if (offer === 'SELL') {
				return 'selling';
			}
			if (offer === 'BUY') {
				return 'buying';
			}
			return '';
		};

		$scope.prettyOfferPrice = function(price) {
			if (!price || price < 0) {
				return '';
			}
			return price + 'g';
		};

		$scope.prettyPrice = function(price) {
			if (!price) {
				return '0g';
			}
			return price + 'g';
		};

		$scope.sort = {
			column: 'name',
			descending: false
		};

		$scope.changeSorting = function(column) {
			var sort = $scope.sort;
			if (sort.column === column) {
				sort.descending = !sort.descending;
			} else {
				sort.column = column;
				sort.descending = false;
			}
		};

		$scope.$watch('cards.cards + prices.prices + priceDetails.details[1]', aggregate);
	});