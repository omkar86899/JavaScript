(function () {
    var redButton = $("#red");
    var blueButton = $("#blue");

    redButton.click(changeBackground);
    blueButton.click(changeBackground);

    function changeBackground(e) {
        $("body").css("background-color", e.target.id);
    }
})();