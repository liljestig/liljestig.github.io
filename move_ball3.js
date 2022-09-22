var velocity = 100;
var position = 0;
var Xmin = 0;
var Xmax = 500;
var positionY = 0;
var Ymin = 0;
var Ymax = 500;
var reverse = false;
var reverseY = false;
var ball = document.getElementById('ball');

function moveBall() {
    if (!reverse) position = position + velocity; else position = position - velocity;
    if (position <= Xmin || position >= Xmax) reverse = !reverse;
    if (!reverseY) positionY = positionY + velocity; else positionY = positionY - velocity;
    if (positionY <= Ymin || positionY >= Ymax) reverseY = !reverseY;
    ball.style.left = position + "px";
    ball.style.top = positionY + "px";
}

setInterval(moveBall, 100);