angular.module('studentspa')
    .service('StudentDTO', ['$http', function ($http) {
        var studentDTO = {};

        studentDTO.getStudents = function () {
            return $http.get("http://localhost:58757/api/v1/students");
        }
        studentDTO.addStudent = function(student){
            return $http.post("http://localhost:58757/api/v1/students",JSON.stringify(student));
        }
        studentDTO.deleteStudent = function(id) {
            return $http.delete("http://localhost:58757/api/v1/students/"+id);
        }
        studentDTO.updateStudent = function(id,student){
            return $http.put("http://localhost:58757/api/v1/students/"+id,JSON.stringify(student));
        }
        return studentDTO;
    }])