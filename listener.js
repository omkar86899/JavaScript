var button = document.getElementById("clickButton");

button.addEventListener("click",god);
button.addEventListener("click",devil);
function god(){
    console.log("god is listening");
    console.log(arguments[0]);
}
function devil(){
    console.log("devil is listening");
    console.log(arguments);
}