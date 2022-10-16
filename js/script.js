/* var scroll = document.querySelector(".wrapper");
var div = document.addEventListener(touchstart, foo);

function foo () {
    scroll.style.translateX = 50%;
} */


/* let offset = 0;
var slider = document.querySelector(".content__button-inner");
slider.addEventListener('click', foo());

function foo () {
    console.log("blyat");
} */

/* document.querySelector(".page").addEventListener('TouchEvent', function () {
    offset = offset + 1024;
    if (offset > 1024)
    slider.style.left = -offset + 'px';
} ); */
const block = document.querySelector(".wrapper");
let x1 = null;
let y1 = null;

function start (event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    /* console.log(x1, y1); */
}

document.addEventListener("touchstart", start, false);
document.addEventListener("touchmove", move, false);

var firstSlide = document.querySelector("page__first-slide");
var thirdSlide = document.querySelector("page__third-slide");

function move(event) {
    if(!x1 || !y1)
    {
        return false;
    }
    var x2 = event.touches[0].clientX;
    var y2 = event.touches[0].clientY;
    console.log(x2, y2);
    var xDiff = x2 - x1;
    var yDiff = y2 - y1;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            block.style.right = -xDiff + 'px';
        }
        else
        {
            block.style.left = xDiff + 'px';
        }
    }
    if (block.left < 512) {
        firstSlide.style.left = 1024;
        thirdSlide.style.left = 0;
    }
}