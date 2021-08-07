//iife without passing paramenters

(function(){
    console.log("iife running");
})();

//iife with passing parameter

(function(width, height){
    console.log("Area of Rectangle is: "+width*height);
})(10,20);

//iife for private variables or functions

const powers = number =>(function(number){
    let sqrt =  function(){
        return Math.sqrt(number);
    }
    return{
        getCube: function(){
            return Math.pow(number,3);
        },
        getSquare: function(){
            return Math.pow(number,2);
        }
    }
})(number);

console.log(powers(2).getCube());
console.log(powers(2).getSquare());
console.log(powers(2).sqrt);