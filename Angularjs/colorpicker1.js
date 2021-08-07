angular.module("main",[])
    .controller("colorController",['$rootScope','$scope',function($rootScope,$scope){
        $scope.color = "";
        $scope.changeBackgroundColor = function(){
            $rootScope.bodyStyle = {
                'background-color': $scope.color,
            }
        }
    }])