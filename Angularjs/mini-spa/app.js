angular.module('spa', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Fragements/home.html',
                controller: 'HomeController'
            })
            .when('/home', {
                templateUrl: 'Fragements/home.html',
                controller: 'HomeController'
            })
            .when('/about', {
                templateUrl: 'Fragements/about.html',
                controller: 'AboutController'
            })
            .when('/career', {
                templateUrl: 'Fragements/career.html',
                controller: 'CareerController'
            })
    }])