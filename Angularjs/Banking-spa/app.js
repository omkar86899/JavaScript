angular.module('BankingSpa', ['ngRoute'])
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
            .when('/viewpassbook', {
                templateUrl: 'Fragements/viewpassbook.html',
                controller: 'ViewPassbookController'
            })
            .when('/login', {
                templateUrl: 'Fragements/login.html',
                controller: 'LoginController'
            })
            .when('/register', {
                templateUrl: 'Fragements/register.html',
                controller: 'RegisterController'
            })
    }])