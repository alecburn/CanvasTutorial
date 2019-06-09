var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = Math.random() * 5;
var dy = Math.random() * 7;
var radius = Math.random() * 30 + 1;
var mouse = {x: 0, y: 0};

var colorArray = [
    '#9053a7',
    '#fd3b93',
    '#0bbac6',
    '#e1e562',
    '#8de394'
];
var maxRadius = 40;
var minRadius = 10;


window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;

});

window.addEventListener('resize', function (event) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = '#00000000';
        c.fillStyle = this.color;
        c.stroke();
        c.fill();

    };

    this.update = function () {

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.y += this.dy;
        this.x += this.dx;

        //event
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            this.radius += 1;
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > minRadius) {
            this.radius -= 2;
        }

        this.draw();
    };
}

var circleArray = [];


function init() {
    circleArray = [];
    for (var i = 0; i < Math.random() * 200 + 30; i++) {
        var x = Math.random() * innerWidth;
        var y = Math.random() * innerHeight;
        var dx = Math.random() * 10;
        var dy = Math.random() * 10;
        var radius = Math.random() * 30;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {

        circleArray[i].update()

    }


}

init();
animate();