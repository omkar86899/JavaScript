angular.module('spa')
    .controller('HomeController', ['$scope',function ($scope) {
        $scope.message = "Home Content";
    }])
    .controller('AboutController',['$scope',function ($scope) {
        $scope.message = "About Content";
    }])
    .controller('CareerController',['$scope',function ($scope) {
        $scope.message = "Career Content";
    }]);