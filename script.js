//Canvas and context variables.
var canvas;
var ctx;

//Stores canvas width and height.
var canvasWidth;
var canvasHeight;

function start() {
    canvas = document.getElementById("myCanvas");
    ctx    = canvas.getContext("2d");
    
    canvasWidth  = canvas.width;
    canvasHeight = canvas.height;
    drawBackground();
    drawHouseFront();
    drawHouseLeft();
    drawRoof();
    drawClouds();
}

function drawBackground() {
    
    var rightPoint = 225;
    var leftPoint  = 200;
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
    var frontLeftX      = 140;
    var frontRightX     = 340;
    var topLeftY        = 250;
    var frontWallHeight = 110;
    var topRightY       = 240;
    
    ctx.beginPath();
    ctx.moveTo(frontLeftX, topLeftY + frontWallHeight);
    ctx.lineTo(frontLeftX, topLeftY);
    ctx.lineTo(frontRightX, topRightY);
    ctx.lineTo(frontRightX, topRightY + frontWallHeight - 25);
    ctx.lineTo(frontLeftX, topLeftY + frontWallHeight);
    ctx.fillStyle = "#EDED77";
    ctx.fill();
    ctx.closePath();
}

function drawHouseLeft() {
    var leftLeftX  = 50;
    var leftRightX = 140;
    
    var middleRightY = 250;
    var middleLeftY  = 240;
    
    var leftSummitX = 80;
    var leftSummitY = 180;
    
    ctx.beginPath();
    ctx.moveTo(leftRightX, middleRightY + 110);
    ctx.lineTo(leftRightX, middleRightY);
    ctx.lineTo(leftSummitX, leftSummitY);
    ctx.lineTo(leftLeftX, middleLeftY);
    ctx.lineTo(leftLeftX, middleRightY + 80);
    ctx.moveTo(leftRightX, middleRightY + 110);
    ctx.fillStyle = "#D1D169";
    ctx.fill();
    ctx.closePath();
}

function drawRoof() {
    var leftSummitX = 80;
    var leftSummitY = 180;
    
    var rightSummitX = 260;
    var rightSummitY = 180;
    
    var roofLeftX = 140;
    var roofLeftY = 250;
    
    var roofRightX = 340;
    var roofRightY = 240;
    
    ctx.beginPath();
    ctx.moveTo(roofLeftX, roofLeftY);
    ctx.lineTo(leftSummitX, leftSummitY);
    ctx.lineTo(rightSummitX, rightSummitY);
    ctx.lineTo(roofRightX, roofRightY);
    ctx.lineTo(roofLeftX, roofLeftY);
    ctx.fillStyle = "#E61029";
    ctx.fill();
    ctx.closePath();
    
    function drawSmoke() {
        var x = 50;
        var y = 50;
        var r = 50;
            
        ctx.save();
        ctx.scale(1, 0.5);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * MATH.PI);
        ctx.restore();
        ctx.fillStyle = "gery";
        ctx.fill;
        ctx.closePath();
    }
    
    function drawClouds() {
        var x = 0;
        var y = 0;
        var r = 50;
            
        ctx.save();
        ctx.scale(1, 0.5);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * MATH.PI);
        ctx.restore();
        ctx.fillStyle = "white";
        ctx.fill;
        ctx.closePath();
    }
}