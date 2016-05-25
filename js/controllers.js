angular.module("portfolio.controllers", [])
    .controller("landingController", ["$scope", "$route", "$routeParams", "$location", function($scope, $route, $routeParams, $location) {
        $scope.message = "index";
        
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
    }])
    .controller("portfolioController", ["$scope", "$routeParams",  function($scope, $routeParams) {
        $scope.message = "portfolio";
        this.params = $routeParams;
    }])
    .controller("contactController", ["$scope", "$routeParams", function($scope, $routeParams) {
        $scope.message = "contact";
        this.params = $routeParams;
    }])
;