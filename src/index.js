const target = require("./scripts/target.js")
const spinner = require("./scripts/spinner.js")
const bullet = require("./scripts/bullet.js")
const background = require("./scripts/background.js")
// const Game = require("./scripts/game.js");
// const GameView = require("./scripts/game_view.js")

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("background");
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

 
    const targ = new target
    const spnr = new spinner
    const bllt = new bullet
    const ctxx = canvasEl.getContext("2d");
    const bgrnd = new background

    targ.drawTarget(ctxx)
    spnr.drawSpinner(ctxx)
    bllt.drawBullet(ctxx)
    bgrnd.drawBackground(ctxx)
    
    function animate(i) {
        const ctx = canvasEl.getContext("2d");
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        
        
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // const img = document.getElementById("bground")
        // ctx.drawImage(img, 0,0)

        targ.x += 1
        // debugger
        bgrnd.animate(ctx)
        targ.animate(ctx)
        spnr.animate(ctx)
        bllt.animate(ctx)
        
    }
    animate(0);
  }); 


  