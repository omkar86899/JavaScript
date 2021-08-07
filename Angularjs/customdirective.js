angular.module('main', [])
    .directive('omkarHeader', function () {
        return {
            restrict: 'EA',
            template: "<div class='jumbotron'><h1><strong>My Custom heading</strong></h1><p>Hello User Welcome to our WebSite</p></div>"
        };
    });