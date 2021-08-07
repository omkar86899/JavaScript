(function () {
    var fact = document.getElementById("fact");
    var numberInput = document.getElementById("numberInput");

    document.getElementById("getFactButton").addEventListener("click",function(){
        getFacts();
        storeSearch();
        renderLastSearches(getSearchData());
    });

    function getFacts() {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function () {
            if(numberInput.value%2==0){
                fact.style.backgroundColor = "red";
            }
            if(numberInput.value%2!=0){
                fact.style.backgroundColor = "blue";
            }
            fact.innerHTML = xhr.responseText;
        });
        xhr.open("GET", "http://numbersapi.com/"+numberInput.value);
        xhr.send();
    }

    function renderLastSearches(lastSearches){
        var lastSearchDiv = document.getElementById("lastSearchDiv");
        for (var index = 0; index < 5; index++) {
            var label = document.createElement("label");
            var br = document.createElement("br");
            var lastSearch = lastSearches[lastSearches.length-index-1];
            label.innerHTML = lastSearch.number+" "+moment().from(lastSearch.createdAt);
            lastSearchDiv.appendChild(label);
            lastSearchDiv.appendChild(br);
        }

    }

    if(localStorage.lastSearches==undefined){
        localStorage.setItem("lastSearches",JSON.stringify([]));
    }
    function storeSearch(){
        var lastSearches = JSON.parse(localStorage.lastSearches);
        var lastSearch = {
            number: numberInput.value,
            createdAt: Date.now()
        };
        lastSearches.push(lastSearch);
        localStorage.setItem("lastSearches",JSON.stringify(lastSearches));
    }
    function getSearchData(){
        return JSON.parse(localStorage.lastSearches);
    }
    renderLastSearches(getSearchData());
})();