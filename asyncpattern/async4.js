function doSomething(input) {
    return new Promise(function (resolve, reject) {
        console.log("inside promise");
        var result = Math.random() * input;
        console.log(result);

        if (result > 5) {
            resolve({ success: result });
            return;
        }
        reject({ error: "Something went wrong" });

    })
}

doSomething(10)
    .then(function resolve(result) {
        console.log("success happend", result);
    })
    .catch(function reject(error) {
        console.log("error happened", error);
    });

console.log("End of the program");