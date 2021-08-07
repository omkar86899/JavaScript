angular.module('EcommerceSpa')
    .controller('ProductListController', ['$scope', 'ProductDTO', '$location', '$rootScope', function ($scope, ProductDTO, $location, $rootScope) {
        $scope.viewmodel = {
            products:{},
            showImage:false
        };
        $rootScope.products = {};
        ProductDTO.getProducts()
            .then(function (response) {
                $scope.viewmodel.products = response.data;
                $rootScope.products = response.data;
            })
        $scope.loadProduct = function (productCode) {
            $location.path('/product/' + productCode);
        }
        $scope.toggleImages = function($event){
            if($scope.viewmodel.showImage){
                $event.path[0].innerText = "Show Images"
                $scope.viewmodel.showImage = false;
                return;
            }
            $event.path[0].innerText = "Hide Images"
            $scope.viewmodel.showImage = true;
        }
        $scope.fliterResults = function(){
            for (var index = 0; index < $rootScope.products.length; index++) {
                !$rootScope.products[index].productName.toLowerCase().includes($scope.viewmodel.filterString.toLowerCase()) ? $rootScope.products[index].isFiltered=true:$rootScope.products[index].isFiltered=false;
            }
        }
    }])
    .controller('ProductController', ['$scope', '$rootScope', '$routeParams', '$location',  function ($scope, $rootScope, $routeParams, $location) {
        for (var index = 0; index < $rootScope.products.length; index++) {
            $routeParams.id == $rootScope.products[index].productCode ? $scope.product=$rootScope.products[index]:0;
        }
        $scope.goBack = function(){
            $location.path('/productlist');
        }
    }])