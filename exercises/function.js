//function declaration or function statement
function calculateRectangleArea(width, height){
    return width*height;
}

console.log(calculateRectangleArea(10,20));

//function expression

var getRectArea = function(width, height){
    return width*height;
}
console.log(getRectArea(10,20));