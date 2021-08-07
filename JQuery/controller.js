(function(){
    var banner = $("#banner");
    banner.html("<h1>Welcome to jQuery</h1>")
    .css("background-color", "blue")
    .fadeOut()
    .fadeIn(3000);
})();