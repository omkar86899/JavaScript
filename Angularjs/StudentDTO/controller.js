angular.module('main', [])
    .controller('MainController', ['$scope', 'StudentDTO', function ($scope, StudentDTO) {
        $scope.viewmodel = {
            student: {},
        };
        $scope.addData = function () {
            $scope.viewmodel.isAddButtonLoading = true;
            StudentDTO.addDataToStorage($scope.viewmodel.student)
                .then(function (response) {
                    alert("Data is Successfully Submited");
                    $scope.viewmodel.isAddButtonLoading = false;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        $scope.deleteData = function (student) {
            StudentDTO.deleteDataFromStorage(student.id)
                .then(function (response) {
                    alert("Data Successfully Deleted");
                    console.log(response);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        $scope.displayData = function () {
            $scope.viewmodel.isDisplayButtonLoading = true;
            StudentDTO.getDataFromStorage()
                .then(function (response) {
                    $scope.students = response.data;
                    $scope.viewmodel.noOfStudents = $scope.students.length;
                    $scope.viewmodel.isDisplayButtonLoading = false;
                })
        }
        $scope.populateData = function (student) {
            $scope.viewmodel.student = student;
            $scope.viewmodel.student.isMale = $scope.viewmodel.student.isMale.toString();
        }
    }])
    .service('StudentDTO', ['$http', function ($http) {
        var studentDTO = {};

        studentDTO.getDataFromStorage = function () {
            var request = $http.get("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students");
            return request;
        }
        studentDTO.addDataToStorage = function (data) {
            var request = $http.post("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students", JSON.stringify(data));
            return request;
        }
        studentDTO.deleteDataFromStorage = function (id) {
            var reuest = $http.delete("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students"+id);
            return request;
        }

        return studentDTO;
    }])