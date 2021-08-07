angular.module('main', [])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.taskInput = "";
        $scope.taskList = [];
        $scope.lastUpdateTime = '';
        $scope.totalItems = 0;
        $scope.addTaskToList = function () {
            $scope.task = {
                text: $scope.taskInput,
                id: Date.now()
            };
            $scope.taskList.push($scope.task);
            $scope.lastUpdateTime = $scope.task.id;
            $scope.totalItems = $scope.totalItems + 1;
        }
        $scope.deleteAll = function () {
            $scope.taskList = [];
            $scope.lastUpdateTime = Date.now();
            $scope.totalItems = 0;
        }
        $scope.strikeTask = function (id) {
            angular.element(document.getElementById(id))
                .css("text-decoration", "line-through");
            $scope.lastUpdateTime = Date.now();
            $scope.totalItems = $scope.totalItems -1;
        }
    }])
    .filter('moment', function () {
        return function (date) {
            return moment().from(date);
        }
    });