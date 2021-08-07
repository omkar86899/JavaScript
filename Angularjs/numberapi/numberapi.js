angular.module('main', [])
    .controller('MainController', ['$http', '$scope', function ($http, $scope) {
        $scope.no = 0;
        $scope.getFacts = function () {
            $http.get("http://numbersapi.com/" + $scope.no)
                .then(function (response) {
                    console.log("gets response");
                    $scope.fact = response.data;
                })
                .catch(function (err) {
                    console.log(err);
                });
            console.log("end of program");
        }
    }])