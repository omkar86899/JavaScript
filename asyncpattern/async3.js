function doSomething(input, successCallBackFn, errorCallBackFn) {
    setTimeout(function () {
        result = Math.random() * input;
        console.log(result);

        if (result > 5) {
            successCallBackFn({ success: result });
            return;
        }
        errorCallBackFn({ error: "Something went wrong" });
    }, 0);
}

doSomething(10, function (data) {
    console.log("Success happed", data);
}, function (err) {
    console.log("err happend", err);
});
console.log("End of main");