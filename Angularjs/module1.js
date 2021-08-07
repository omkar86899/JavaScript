angular.module("ModuleA", [])
    .controller("ControllerA", function ($log,$scope,$rootScope) {
        $log.info("using $log service");

        $rootScope.Company = {
            name : 'Aurionpro',
            strength: 300
        }

        $scope.developer = {
            name : 'omkar',
            role : 'junior Engineer'
        }

        $log.info($rootScope);
        $log.info($scope);
    })