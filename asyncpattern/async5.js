function doSomething(input) {
    return new Promise(function (resolve, reject) {
        var result = Math.random() * input;

        if (result > 5) {
            resolve(result);
            return;
        }
        reject({ error: "Something went wrong" });

    })
}

doSomething(10)
.then(function resolve(result){
    return result*2;
})
.then(function resolve(result){
    return result*3;
})
.then(function resolve(result){
    console.log(result);
})
.catch(function reject(error){
    console.log(error);
})