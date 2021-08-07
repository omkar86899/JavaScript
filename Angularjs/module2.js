angular.module('ModuleB',[])
    .controller('ControllerB',['$scope','$rootScope',function($scope,$rootScope){
        console.log("module b");
        $scope.message = "Hello says Controller B";
        console.log($rootScope.developer);
    }]);

angular.module('ModuleA',['ModuleB'])
    .controller('ControllerA',['$scope','$rootScope',function($scope,$rootScope){
        console.log("modulea");
        $scope.message = "Hello says Controller A";
        $rootScope.developer = {
            name: 'omkar',
            role: 'junior Engineer',
            add: ['azad nagar','thane'],
        }
    }])