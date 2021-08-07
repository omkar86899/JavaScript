var button = document.getElementById("button");
var p = document.getElementById("p");
button.addEventListener("click", function () {
  setTimeout(alertFunction, 3000);
});

function alertFunction() {
  alert('hi omkar');
}

setInterval(myTimer, 1000);

function myTimer() {
  var date = new Date();
  document.getElementById("p").innerHTML = date.toLocaleTimeString();
}F