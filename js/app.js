angular.module("portfolio", ["portfolio.controllers", "ngRoute"])
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
    }])
;