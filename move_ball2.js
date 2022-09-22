var velocity = 100;
var position = 0;
var Xmin = 0;
var Xmax = 500;
var reverse = false;
var ball = document.getElementById('ball');

function moveBall() {
    if (!reverse) position = position + velocity; else position = position - velocity;
    if (position <= Xmin || position >= Xmax) reverse = !reverse;
    ball.style.left = position + 'px';
}

setInterval(moveBall, 100);