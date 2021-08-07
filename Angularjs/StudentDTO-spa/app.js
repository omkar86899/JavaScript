angular.module('studentspa', ['ngRoute'])
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
            .when('/add', {
                templateUrl: 'Fragements/add.html',
                controller: 'AddController'
            })
            .when('/edit/:id', {
                templateUrl: 'Fragements/edit.html',
                controller: 'EditController'
            })
    }])