angular.module('ModuleA',[])
    .controller('ControllerA',['$scope','$rootScope','$timeout',function($scope,$rootScope,$timeout){
        $scope.developer = {
            name: 'omkar',
            role: 'junior Engineer',
            add: ['azad nagar','thane'],
        }
        $rootScope.message = "hi";
        $timeout(function(){
            $scope.developer.name = 'abc';
            $rootScope.message = "tt";
        },4000)
    }])