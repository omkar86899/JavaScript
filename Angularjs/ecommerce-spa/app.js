angular.module('EcommerceSpa', ['ngRoute','ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Fragements/home.html',
            })
            .when('/home', {
                templateUrl: 'Fragements/home.html',
            })
            .when('/productlist', {
                templateUrl: 'Fragements/productlist.html',
                controller: 'ProductListController'
            })
            .when('/product/:id', {
                templateUrl: 'Fragements/product.html',
                controller: 'ProductController'
            })
    }])