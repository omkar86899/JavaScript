(function(){
    var syncTimer = document.getElementById("syncTimer");
    var asyncTimer = document.getElementById("asyncTimer");

    document.getElementById("printASyncButton").addEventListener("click",function(){
        var asyncPrinter = new Worker("worker.js");
        asyncPrinter.onmessage = function(event){
            asyncTimer.innerHTML = "ASync Timer: "+event.data;
        }
    })

    document.getElementById("helloButton").addEventListener("click",function() {
        alert("hello");
    })

    document.getElementById("printSyncButton").addEventListener("click",function(){
        while(true){
            syncTimer.innerHTML = "Sync Timer: "+Date();
        }
    })
})();