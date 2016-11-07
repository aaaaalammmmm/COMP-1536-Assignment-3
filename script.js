//Canvas and context variables.
var canvas;
var ctx;

//Stores canvas width and height.
var canvasWidth;
var canvasHeight;

function start() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    drawBackground();
    drawHouseFront();
}

function drawBackground() {
    
    var rightPoint = 225;
    var leftPoint = 200;
    //Grass
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.lineTo(canvasWidth, rightPoint);
    ctx.lineTo(0, leftPoint);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
    
    //Sky
    ctx.beginPath();
    ctx.moveTo(0, leftPoint);
    ctx.lineTo(0, 0);
    ctx.lineTo(canvasWidth, 0);
    ctx.lineTo(canvasWidth, rightPoint);
    ctx.fillStyle = "cyan";
    ctx.fill();
    ctx.closePath();
}

function drawHouseFront() {
    var frontLeftX = 100;
    var frontRightX = 275;
    var topLeftY = 150;
    var frontWallHeight = 100;
    var topRightY = 120;
    
    ctx.beginPath();
    ctx.moveTo(frontLeftX, topLeftY + frontWallHeight);
    ctx.lineTo(frontLeftX, topLeftY);
    ctx.lineTo(frontRightX, topRightY);
    ctx.lineTo(frontRightX, topRightY + frontWallHeight);
    ctx.lineTo(frontLeftX, topLeftY + frontWallHeight);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}