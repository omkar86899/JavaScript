angular.module('ModuleA', [])
    .controller('colorController',['$rootScope',function($rootScope){
        $rootScope.color="red";
    }])