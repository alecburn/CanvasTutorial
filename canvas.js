var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


c.fillStyle = 'rgba(205,76,0, 0.5';
c.fillRect(100,100,100,100);


//line
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(248,394);
c.strokeStyle = "afa34a3";
c.stroke();

// arc/circle
c.beginPath();
c.arc(300,300,30,0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
