(function () {
    var slider = document.getElementById("slider");
    slider.addEventListener('input', count);

    function count() {
        render(slider.value);
    }

    function render(value) {
        var div = document.getElementById("div");
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        for (var index = 0; index < value; index++) {
            var button = document.createElement("button");
            button.textContent = index + 1;
            button.id = index+1;
            button.addEventListener('click', alertFunction);
            div.appendChild(button);
        }
    }

    function alertFunction(e) {
        alert("button "+e.target.id+" is Clicked");
    }
})();