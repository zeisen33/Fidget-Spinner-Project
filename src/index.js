const crc = require("./scripts/circle.js")
const spnr = require("./scripts/spinner.js")

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("background");
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    // const canvasSpinner = document.getElementById("spinner");
    // canvasSpinner.width = 500;
    // canvasSpinner.height = 500
  
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  
    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();

    const spinner = new spnr(ctx)
    spinner.animate(spinner.context)
    // ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    ctx.fillStyle = "red";
    ctx.fillRect(300, 300, 100, 100);
    setTimeout(spinner.move, 5000)
    // setTimeout(spinner.rotate, 4000)

    const circle = new crc(ctx)
    circle.animate(circle.context)
    setTimeout(circle.move, 5000)
  });


  