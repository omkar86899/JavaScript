angular.module('studentspa')
    .controller('HomeController', ['$scope', 'StudentDTO', '$location', '$rootScope', '$timeout', function ($scope, StudentDTO, $location, $rootScope, $timeout) {
        $scope.viewmodel = {};
        StudentDTO.getStudents()
            .then(function (response) {
                $rootScope.students = response.data;
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err);
            })
        $scope.deleteData = function (id) {
            $scope.viewmodel.isDeleting = true;
            if (confirm("Are you sure you want to Delete this student data")) {
                $scope.viewmodel.deleteOccuredAt = id;
                StudentDTO.deleteStudent(id)
                    .then(function (response) {
                        $scope.viewmodel.isDeleting = false;
                        $scope.viewmodel.isDeleted = true;
                        $timeout(function(){
                            $location.path('/');
                        },500);
                    })
                    .catch(function (err) {
                        $scope.viewmodel.isDeleting = false;
                        $scope.viewmodel.isDeleted = false;
                        console.log(err);
                    })
            }
        }
        $scope.editStudentData = function (id) {
            $location.path('/edit/' + id);
        }
    }])
    .controller('AddController', ['$scope', 'StudentDTO', '$location', '$timeout', function ($scope, StudentDTO, $location, $timeout) {
        $scope.viewmodel = {
            student: {},
            isErrorOcurred: false
        };
        $scope.addStudent = function () {
            $scope.viewmodel.isAddButtonLoading = true;
            StudentDTO.addStudent($scope.viewmodel.student)
                .then(function (response) {
                    $scope.viewmodel.isErrorOcurred = false;
                    $scope.viewmodel.isAddButtonLoading = false;
                    alert("Data Added Successfully");
                    $timeout(function () {
                        $location.path('/home');
                    }, 500);
                    console.log(response.data);
                })
                .catch(function (err) {
                    $scope.viewmodel.isErrorOcurred = true;
                    $scope.viewmodel.isAddButtonLoading = false;
                    console.log(err);
                })
        }
        $scope.clearAll = function () {
            $scope.viewmodel.student = {};
        }
    }])
    .controller('EditController', ['$scope', 'StudentDTO', '$location', '$timeout', '$rootScope', '$routeParams', function ($scope, StudentDTO, $location, $timeout, $rootScope, $routeParams) {
        $scope.viewmodel = {
            student: {}
        }
        for (var index = 0; index < $rootScope.students.length; index++) {
            $rootScope.students[index].id == $routeParams.id ? $scope.viewmodel.student = $rootScope.students[index] : 0;
        }
        console.log($rootScope.students);
        $scope.updateStudent = function () {
            $scope.viewmodel.isAddButtonLoading = true;
            StudentDTO.updateStudent($routeParams.id, $scope.viewmodel.student)
                .then(function (response) {
                    $scope.viewmodel.isErrorOcurred = false;
                    $scope.viewmodel.isAddButtonLoading = false;
                    alert("Student Data Successfully Updated.");
                    $timeout(function () {
                        $location.path('/home');
                    }, 500);
                    console.log(response);
                })
                .catch(function (err) {
                    $scope.viewmodel.isErrorOcurred = true;
                    $scope.viewmodel.isAddButtonLoading = false;
                    console.log(err);
                })
        }
    }])