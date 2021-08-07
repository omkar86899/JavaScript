function doSomething(input){
    var result = Math.random()*input;

    if(result>5){
        return {success:result};
    }

    return {error: "Something went wrong"};
}

console.log(doSomething(10));
console.log("End of main");