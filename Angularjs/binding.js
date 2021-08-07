angular.module('main',[])
    .controller('MainController',['$scope',function($scope){
        $scope.student = {
            roll: 100,
            name: 'omkar',
            cgpa: 7.1
        }
    }])