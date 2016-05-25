angular.module('portfolio', ['portfolio.controllers', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'landing.html',
                controller: 'portfolioController'
            })
            .when('/portfolio', {
                templateUrl: 'portfolio.html',
                controller: 'portfolioController'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller: 'contactController'
            });
    })