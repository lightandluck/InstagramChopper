var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

canvas.width = 100;
canvas.height = 100;

var targetImage = document.querySelector("#poster");
canvas.width = targetImage.width;
canvas.height = targetImage.height;
ctx.drawImage(targetImage, 0, 0);

var takePicture = document.querySelector("#take_picture");
takePicture.onchange = function (event) {
    var files = event.target.files,
        file;
    
    if (files && files.length > 0) {
        file = files[0];
    
        var URL = window.URL || window.webkit.URL,
            imgURL = URL.createObjectURL(file),
            img = new Image();

        img.onload = function () {
            canvas.width = this.width;
            canvas.height = this.height;
            ctx.drawImage(this, 0, 0);
        };
        img.src = imgURL;
        targetImage = img;
    } 
};

var btnChop = document.querySelector("#btn_chop");
btnChop.onclick = function () {
    
    if(targetImage) {
        ctx.strokeStyle = "#71daf4";

        var vertSteps = targetImage.height / 3;    
        var horiSteps = targetImage.width / 3;
        ctx.beginPath();
        
        for (var i = 1; i <= 3; i++) {
            ctx.moveTo(0, vertSteps * i);
            ctx.lineTo(targetImage.width, vertSteps * i);        
        }        
        ctx.stroke();
        
    }
    else {
        console.log("No image loaded.");
    }
}
