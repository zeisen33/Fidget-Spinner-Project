const crc = require("./scripts/target.js")
const spnr = require("./scripts/spinner.js")
const Game = require("./scripts/game.js");
const GameView = require("./scripts/game_view.js")

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("background");
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    // const canvasSpinner = document.getElementById("spinner");
    // canvasSpinner.width = 500;
    // canvasSpinner.height = 500
  
    const ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "purple";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    const img = document.getElementById("bground")
    ctx.drawImage(img, 0,0)

    const game = new Game();
    new GameView(game, ctx).start()
  
    // ctx.beginPath();
    // ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "blue";
    // ctx.fill();

    // const spinner = new spnr(ctx)
    // spinner.animate(spinner.context)
    // // ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
    // ctx.fillStyle = "red";
    // // ctx.fillRect(300, 300, 100, 100);
    // // debugger
    // setTimeout(spinner.move, 5000)
    // // debugger
    // setTimeout(spinner.rotate, 4000)

    // debugger
    // const circle = new crc(ctx)
    // circle.animate(circle.context)
    // setTimeout(circle.move, 5000)
    // debugger
    // let x = 200;
    // function animate() {
    //     requestAnimationFrame(animate);
    //     ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    //     const spinner = new spnr(ctx)
    //     spinner.animate(spinner.context)
    //     ctx.fillStyle = "red";
    // }
    // animate();
  });


  