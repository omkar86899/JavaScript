angular.module('EcommerceSpa')
    .filter('toStars', ['$sce',function($sce){
        return function(noOfStars){
            var star = "<span class='glyphicon glyphicon-star'></span>";
            var div = "<div>"+star.repeat(5)+"</div>";
            var sizeOfOuterDiv = 14*noOfStars;
            var style = "style='width:"+sizeOfOuterDiv+"px;height:14px;overflow:hidden'";
            var outerDiv = "<div "+style+" >"+div+"</div>";
            return $sce.trustAsHtml(outerDiv);
        }
    }])