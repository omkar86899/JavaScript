(function () {
    var fact = document.getElementById("fact");
    var numberInput = document.getElementById("numberInput");

    document.getElementById("getFactButton").addEventListener("click", function () {
        getFacts()
            .then(function resolve(response) {
                fact.innerHTML = response;
            })
            .catch(function reject(error) {
                console.log(error);
            })
    });

    function getFacts() {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('load', function () {
                resolve(xhr.responseText);
            });
            xhr.addEventListener("error",function(){
                reject("Error happened",xhr.responseText);
            })
            xhr.open("GET", "http://numbersapi.com/" + numberInput.value);
            xhr.send();
        })
    }
})();