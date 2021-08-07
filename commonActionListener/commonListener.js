var blueButton = document.getElementById("blue");
var redButton = document.getElementById("red");

blueButton.addEventListener("click",eventListener);
redButton.addEventListener("click",eventListener);

function eventListener(){
    document.body.style.backgroundColor = arguments[0].path[0].id;
}