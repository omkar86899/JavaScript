(function () {
    var fact = document.getElementById("fact");
    console.log("start");
    document.getElementById("getFactButton").addEventListener("click", getFacts);

    function getFacts() {
        var number = document.getElementById("number");
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            fact.innerHTML = xhr.responseText;
        });
        xhr.open("GET", "http://numbersapi.com/"+number.value);
        xhr.send();
    }
    console.log("end of program");
})();