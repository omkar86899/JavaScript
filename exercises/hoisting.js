//variable hoisting
foo = "hello";
console.log(foo);
var foo;

//function hoisting
console.log(greet());
function greet(){
    return "hii";
}