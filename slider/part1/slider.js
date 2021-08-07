(function(){
    var slider = document.getElementById("slider");
    var counter = document.getElementById("count");
    slider.addEventListener('input',count);

    function count(){
        counter.innerHTML = slider.value;
    }
})();