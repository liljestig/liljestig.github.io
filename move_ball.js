var velocity = 100;
var position = 0;
var ball = document.getElementById("ball");

function moveBall() {
    position = position + velocity;
    ball.style.left = position + "px";
}

setInterval(moveBall, 100);