angular.module("portfolio", ["portfolio.controllers", "ngRoute"])
<<<<<<< HEAD
    .config(["$routeProvider", "$locationProvider", function config($routeProvider, $locationProvider) {
        $routeProvider
            .when("/portfolio", {
                templateUrl: "portfolio.html",
                controller: "portfolioController"
            })
            .when("/contact", {
                templateUrl: "contact.html",
                controller: "contactController"
            });
            
            
=======
    .config(["$routeProvider", function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "../index.html",
                controller: "landingController"
            })
            .when("/portfolio", {
                templateUrl: "../portfolio.html",
                controller: "portfolioController"
            })
            .when("/contact", {
                templateUrl: "../contact.html",
                controller: "contactController"
            });
>>>>>>> origin/master
    }])
;