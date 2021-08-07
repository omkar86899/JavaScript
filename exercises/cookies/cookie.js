var button = document.getElementById("button");

button.addEventListener("click",showCookie);

(function(){
    document.cookie = "name=rahul;expires=Thu, 03 July 2021 12:00:00 UTC;";
})();

function showCookie(){
    var cookies = document.cookie;
    var cookieArray = cookies.split(";");
    cookieArray.forEach(element => {
        console.log(element);
    });
}