function doSomething(input, successCallBackFn, errorCallBackFn) {
    result = Math.random() * input;
    console.log(result);

    if (result > 5) {
        successCallBackFn({ success: result });
        return;
    }
    errorCallBackFn({ error: "Something went wrong" });
}

doSomething(10, function (data) {
    console.log("Success happed", data);
}, function (err) {
    console.log("err happend", err);
});
console.log("End of main");