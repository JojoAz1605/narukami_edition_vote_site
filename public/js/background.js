let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ballRadius = 1;
let x = canvas.width/2;
let y = canvas.height-30;
let nb = getRandomArbitrary(500, 2000);

let allBalls = [];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

class Ball {
    constructor() {
        this.x = getRandomArbitrary(0, canvas.width);
        this.y = getRandomArbitrary(0, canvas.height);
        this.dx = getRandomArbitrary(-3, 3);
        this.dy = getRandomArbitrary(-3, 3);
        this.color = "rgba(231,206,180,0.8)";
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    collisions() {
        if(this.x + this.dx > canvas.width-ballRadius || this.x + this.dx < ballRadius) {
            this.dx = -this.dx;
        }
        if(this.y + this.dy > canvas.height-ballRadius || this.y + this.dy < ballRadius) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }

    live() {
        this.drawBall();
        this.collisions();
    }
}

for (let i = 0; i < nb; i++) {
    allBalls.push(new Ball(x, y));
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < allBalls.length; i++) {
        allBalls[i].live();
    }
}

setInterval(draw, 10);