angular.module("portfolio", ["portfolio.controllers", "ngRoute"])
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
    }])
;