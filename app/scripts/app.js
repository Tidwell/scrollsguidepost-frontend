'use strict';

angular.module('scrollsguidepostFrontendApp', ['ui.keypress', 'ngCookies'])
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});