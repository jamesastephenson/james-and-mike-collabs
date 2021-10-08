// define constants ----------------------------------------------------
const starColor = "white";
const starNum = 200;   // total number of stars in field
const starSize = 0.005;  // mas star size (fraction of screen width)
const starSpeedConst = 0.05;  // fraction of screen width per second (1/20)

// set up canvas and canvas context ---------------------------------
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");  // returns a drawing context on the canvas
// define height and width using the size of the viewport
canvas.height = document.documentElement.clientHeight;
canvas.width = document.documentElement.clientWidth;
document.body.appendChild(canvas);  // appends canvas to the body

// define gradient on 2d context
var gradient = ctx.createLinearGradient(0 , 0, 0, canvas.height);
gradient.addColorStop(0, 'black');
gradient.addColorStop(0.5, 'black');
gradient.addColorStop(1, '#482f72');

// set up stars -------------------------------------------------
var stars = [];
var starSpeed = starSpeedConst * canvas.width; // multiplying by screen width since starSpeed is 0.05 of screen width per second
var xv = starSpeed * randomSign() * Math.random();  // setting random velocity in x direction
// use pythagorean theorum to get the y velocity (yv = sqrt(starSpeed^2 - yv^2))
var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();

// setting for loop to iterate through out stars array
for (i = 0; i < starNum; i++) {
    let speedMult = Math.random() * 1.5 + 0.5;
    // each star gets a radius, x pos, y pos, x velocity, and y velocity
    stars[i] = {
        r: Math.random() * starSize * canvas.width / 2,
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        xv: xv * speedMult,
        yv: yv * speedMult
    }
}

// set up animation loop ----------------------------------------------
var timeDelta, timeLast = 0;  // timeDelta is difference b/w 2 frames
requestAnimationFrame(loop);  // browser will call this as often as it can

function loop(timeNow) {
    // timeNow is the current time in ms

    // calculate time difference
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;  // keeping track for next frame

    // draw space bg
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw the stars
    ctx.fillStyle = starColor;
    for (i = 0; i < starNum; i++) {
        // we can use beginPath() and the arc function to draw circles in js
        ctx.beginPath();
        // x and y define midpoint, then it's 2 * pi * r
        ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2); 
        ctx.fill();

        // update star's x position
        stars[i].x += stars[i].xv * timeDelta * 0.001;

        // reposition the star to other side if it goes offscreen
        if (stars[i].x < 0 - stars[i].r) {
            stars[i].x = canvas.width + stars[i].r;
        } else if (stars[i].x > canvas.width + stars[i].r) {
            stars[i].x = 0 - stars[i].r;
        }

        // update star's y position
        stars[i].y += stars[i].yv * timeDelta * 0.001;

        // reposition the star to other side if it goes offscreen
        if (stars[i].y < 0 - stars[i].r) {
            stars[i].y = canvas.width + stars[i].r;
        } else if (stars[i].y > canvas.width + stars[i].r) {
            stars[i].y = 0 - stars[i].r;
        }
    }
    // call next frame
    requestAnimationFrame(loop);
}

// returns 1 or -1
function randomSign() {
    return Math.random() >= 0.5 ? 1 : -1;
}

// code modified from: https://www.youtube.com/watch?v=py-Qls7Jd3I