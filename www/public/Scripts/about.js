var interval = undefined;

function resizeCanvas() {
    clearInterval(interval);
    var $mainBackgroundContainer = $("body");
    var $mainContainer = $(".main-container");
    var $canvasLeft = $("#background-canvas-left");
    var $canvasRight = $("#background-canvas-right");
    var width = ($mainBackgroundContainer.width() - $mainContainer.width()) / 2;

    $canvasLeft.width(width);
    $canvasLeft.height($mainBackgroundContainer.height());

    $canvasRight.width(width);
    $canvasRight.height($mainBackgroundContainer.height());

    var canvasLeft = document.getElementById("background-canvas-left");
    var ctxLeft = canvasLeft.getContext("2d");

    var canvasRight = document.getElementById("background-canvas-right");
    var ctxRight = canvasRight.getContext("2d");

    var img = new Image();

    var ang = 0; //angle
    var fps = 1000 / 144; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
        canvasLeft.width = width; //double the canvas width
        canvasLeft.height = $mainBackgroundContainer.height(); //double the canvas height

        canvasRight.width = width; //double the canvas width
        canvasRight.height = $mainBackgroundContainer.height(); //double the canvas height
        
        var cache = this; //cache the local copy of image element for future reference
        interval = setInterval(function () {
            ctxLeft.save(); //saves the state of canvas
            ctxLeft.clearRect(0, 0, canvasLeft.width, canvasLeft.height); //clear the canvas
            ctxLeft.fillStyle = "rgba(34, 51, 95, 0.5)";
            ctxLeft.filter = "blur(160px)";
            ctxLeft.fillRect(0, 0, canvasLeft.width, canvasLeft.height);
            ctxLeft.translate(0, cache.height / 2); //let's translate
            ctxLeft.rotate(Math.PI / 180 * (ang += 0.1)); //increment the angle and rotate the image 
            ctxLeft.drawImage(img, -cache.width, -cache.height, cache.width * 2, cache.height * 2); //draw the image ;)
            ctxLeft.restore(); //restore the state of canvas

            ctxRight.save(); //saves the state of canvas
            ctxRight.clearRect(0, 0, canvasRight.width, canvasRight.height); //clear the canvas
            ctxRight.scale(-1, 1);
            ctxRight.fillStyle = "rgba(34, 51, 95, 0.5)";
            ctxRight.filter = "blur(160px)";
            ctxRight.fillRect(0, 0, canvasRight.width, canvasRight.height);
            ctxRight.translate(0, cache.height / 2); //let's translate
            ctxRight.rotate(Math.PI / 180 * (ang += 0.1)); //increment the angle and rotate the image
            ctxRight.drawImage(img, -cache.width, -cache.height, cache.width * 2, cache.height * 2); //draw the image ;)
            ctxRight.restore();
        }, fps);
    };

    img.src = "./images/Shapes.svg"; //img
}

$(window).resize(function () {
    resizeCanvas();
});

$(document).ready(() => {
    setTimeout(() => {
        resizeCanvas();
    }, 10);
});