angular.module('EcommerceSpa')
    .service('ProductDTO', ['$http', function ($http) {
        var productDTO = {};

        productDTO.getProducts = function () {
            return $http.get("products.json");
        }
        return productDTO;
    }])