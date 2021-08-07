angular.module('main', [])
    .controller('EvenController', ['MathService', '$scope', function (MathService, $scope) {
        $scope.no = 0;
        $scope.evenNoHandler = function () {
            MathService.checkEven($scope.no)
                .then(function (result) {
                    console.log(result);
                })
                .catch(function (err) {
                    console.log(err);
                })
            console.log("End of the program");
        }
    }])
    .factory('MathService', ['$q', function ($q) {
        var math = {};
        math.checkEven = function (no) {
            return $q(function (resolve, reject) {
                if (no % 2 == 0) {
                    resolve(true);
                    return;
                }
                if (no % 2 != 0) {
                    resolve(false);
                    return;
                }
            })
        }
        return math;
    }])