function printingTime() {
    var date = Date();
    postMessage(date);
    setTimeout(printingTime,1000);
}
printingTime();