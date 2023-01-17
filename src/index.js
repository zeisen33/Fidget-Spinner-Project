const crc = require("./scripts/circle.js")
const spinner = require("./scripts/spinner.js")

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("circle");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const canvasSpinner = document.getElementById("spinner");
    canvasSpinner.width = 500;
    canvasSpinner.height = 500
  
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, 500, 500);
  
    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();

    const spnr = new spinner(ctx)
    spnr.animate(spnr.context)
    setTimeout(spnr.move, 5000)
    setTimeout(spnr.rotate, 4000)

    const circle = new crc(ctx)
    circle.animate(circle.context)
    setTimeout(circle.move, 5000)
  });


  