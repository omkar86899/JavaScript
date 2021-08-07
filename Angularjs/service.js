angular.module('main', [])
    .controller('MainController', ['binaryToHexService', 'binaryToHexFactory', '$scope', function (binaryToHexService, binaryToHexFactory, $scope) {
        $scope.binaryNumber = "";
        $scope.hexNumber = "";
        $scope.hexNumberFromFactory = "";
        $scope.generateHex = function () {
            $scope.hexNumber = binaryToHexService($scope.binaryNumber);
            $scope.hexNumberFromFactory = binaryToHexFactory($scope.binaryNumber);
        }
    }])
    .service('binaryToHexService', function () {
        return function (binarytext) {
            var decimal = parseInt(binarytext, 2);
            return decimal.toString(16);
        }
    })
    .factory('binaryToHexFactory', function () {
        return function (binarytext) {
            var decimal = parseInt(binarytext, 2);
            return decimal.toString(16);
        }
    });