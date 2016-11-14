//Allows the browser to support animation
window.requestAnimationFrame = window.requestAnimationFrame || 
                               window.mozRequestAnimationFrame || 
                               window.webkitRequestAnimationFrame || 
                               window.msRequestAnimationFrame;

//Canvas and context variables.
var canvas;
var ctx;

//Stores canvas width and height.
var canvasWidth;
var canvasHeight;
var borderWidth1 = 3;

//Draws the Grass and Sky
function drawBackground() {
    var rightPoint = 225;
    var leftPoint  = 200;

    //Grass
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight);
    ctx.lineTo(canvasWidth, canvasHeight);
    ctx.lineTo(canvasWidth, rightPoint);
    ctx.lineTo(0, leftPoint);
    ctx.fillStyle = "#0AD12F";
    ctx.fill();
    ctx.closePath();
    
    //Sky
    ctx.beginPath();
    ctx.moveTo(0, leftPoint);
    ctx.lineTo(0, 0);
    ctx.lineTo(canvasWidth, 0);
    ctx.lineTo(canvasWidth, rightPoint);
    ctx.fillStyle = "#8CF0FF";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(drawBackground);
}

//Draws the front of the house
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
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "#EDED77";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(drawHouseFront);
}

//Draws the left side of the house
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
    ctx.lineTo(leftRightX, middleRightY + 110);
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "#D1D169";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(drawHouseLeft);
}

//Draws the roof of the house
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
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "#E61029";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(drawRoof);
}

//Draws the chimney of the house
function drawChimney() {
    var chimneyLeft = 180;
    var chimneyMiddle = chimneyLeft + 15;
    var chimneyRight = chimneyMiddle + 30;
    var chimneyBottom = 210;
    
    ctx.beginPath();
    ctx.moveTo(chimneyLeft, chimneyBottom - 10);
    ctx.lineTo(chimneyLeft, chimneyBottom - 60);
    ctx.lineTo(chimneyMiddle, chimneyBottom - 70);
    ctx.lineTo(chimneyMiddle, chimneyBottom);
    ctx.lineTo(chimneyLeft, chimneyBottom - 10);
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(chimneyMiddle, chimneyBottom);
    ctx.lineTo(chimneyMiddle, chimneyBottom - 70);
    ctx.lineTo(chimneyRight, chimneyBottom - 65);
    ctx.lineTo(chimneyRight, chimneyBottom - 2);
    ctx.lineTo(chimneyMiddle, chimneyBottom);
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "magenta";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(drawChimney);
}

//Draws the doors of the house
function drawDoor() {
    var doorLeft = 170;
    var doorRight = doorLeft + 40;
    
    ctx.beginPath();
    ctx.moveTo(doorLeft, 355);
    ctx.lineTo(doorLeft, 280);
    ctx.lineTo(doorRight, 278);
    ctx.lineTo(doorRight, 348);
    ctx.lineTo(doorLeft, 355);
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(drawDoor);
}

//Draws the windows of the house
function drawWindows() {
    var window1Left = 240;
    var window1Right = 310;
    
    var window2Left = 70;
    var window2Right = 110;
    
    ctx.beginPath();
    ctx.moveTo(window1Left, 320);
    ctx.lineTo(window1Left, 280);
    ctx.lineTo(window1Right, 275);
    ctx.lineTo(window1Right, 310);
    ctx.lineTo(window1Left - 2, 320);
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "cyan";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(window2Left, 300);
    ctx.lineTo(window2Left, 250);
    ctx.lineTo(window2Right, 260);
    ctx.lineTo(window2Right, 310);
    ctx.lineTo(window2Left, 300);
    ctx.lineWidth = borderWidth1;
    ctx.stroke();
    ctx.fillStyle = "cyan";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(drawWindows);
}

//Draws the clouds
function drawClouds() {
  //  var x = Math.floor((Math.random()) * 400 + 1);
//    var y = Math.floor((Math.random()) * 250 + 1);
    var x = 100;
    var y = 100;
    var r = 50;

    ctx.save();
    ctx.scale(1, 0.5);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.restore();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(drawClouds);
}

var smokeX = 200;
var smokeY = 100;
//Draws the smoke that is billowing from the chimneys
function animateSmoke() {
    var r = 20;
    
    if(smokeY > 0) {
        ctx.beginPath();
        ctx.arc(smokeX, smokeY, r, 0, 2 * Math.PI);
        ctx.restore();
        ctx.fillStyle = "grey";
        ctx.fill();
        ctx.closePath();
        smokeY--;
        smokeX++;
    requestAnimationFrame(animateSmoke);
    } else {
        smokeX = 200;
        smokeY = 100;
        requestAnimationFrame(animateSmoke);
    }
}

//Draws the house by calling all of the methods in the script
function start() {
    canvas = document.getElementById("myCanvas");
    ctx    = canvas.getContext("2d");
    
    canvasWidth  = canvas.width;
    canvasHeight = canvas.height;
    drawBackground();
    drawHouseFront();
    drawHouseLeft();
    drawRoof();
    drawChimney();
    drawDoor();
    drawWindows();
    drawClouds();
    drawClouds();
    drawClouds();
    animateSmoke();
}