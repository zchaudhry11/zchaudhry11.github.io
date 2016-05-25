angular.module("portfolio.controllers", [])
    .controller("landingController", ["$scope", function($scope) {
        $scope.message = "index";
    }])
    .controller("portfolioController", ["$scope", function($scope) {
        $scope.message = "portfolio";
    }])
    .controller("contactController", ["$scope", function($scope) {
        $scope.message = "contact";
    }])
;