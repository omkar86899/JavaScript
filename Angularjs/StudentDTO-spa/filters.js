angular.module('studentspa')
    .filter('gender', function () {
        return function (isMale) {
            if (isMale) {
                return "Male";
            }
            return "Female";
        }
    })