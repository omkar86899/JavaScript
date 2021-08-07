(function () {
    var randomNumber = Math.floor(Math.random() * 50) + 1;

    document.getElementById("submitButton").addEventListener("click", renderer);

    function renderer() {
        var buttonsDiv = document.getElementById("buttonsDiv");
        buttonsDiv.style.display = "block";
        document.getElementById("initialDiv").style.display = "none";
        for (var index = 0; index < 50; index++) {
            var button = document.createElement("button");
            button.textContent = index + 1;
            button.id = index + 1;
            button.className = "btn-circle btn-xl";
            button.addEventListener("click", changeBackgroundColor);
            buttonsDiv.appendChild(button);
        }
    }

    function changeBackgroundColor(e) {
        var id = e.target.id;
        var isWin;
        e.target.disabled = true;
        if (id > randomNumber) {
            document.getElementById(id).style.backgroundColor = "green";
            isWin = false;
        }
        if (id < randomNumber) {
            document.getElementById(id).style.backgroundColor = "red";
            isWin = false;
        }
        if (id == randomNumber) {
            document.getElementById(id).style.backgroundColor = "blue";
            isWin = true;
        }
        setTimeout(function () {
            checkAttempts(isWin);
        }, 3000);
    }

    function checkAttempts(isWin) {
        var attempts = document.getElementById("attempts");
        attempts.innerHTML = Number(attempts.innerHTML) - 1;
        if (attempts.innerHTML === "0" && !isWin) {
            alert("You Lose the Game");
        }
        if (isWin) {
            alert("You Won the Game");
        }

        if (attempts.innerHTML == "0" || isWin) {
            location.reload();
        }
    }
})();