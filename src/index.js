const target = require("./scripts/target.js")
const spnr = require("./scripts/spinner.js")
// const Game = require("./scripts/game.js");
// const GameView = require("./scripts/game_view.js")

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("background");
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

 
    const targ = new target
    const ctxx = canvasEl.getContext("2d");
    targ.drawTarget(ctxx)
    
    function animate(i) {
        const ctx = canvasEl.getContext("2d");
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        
        
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        const img = document.getElementById("bground")
        ctx.drawImage(img, 0,0)

        targ.x += 1
        targ.animate(ctx)
        if (i < 400) {
            setTimeout(function () {
                animate(i + 1)
            }, 100)
        }
    }
    animate(0);
  }); 


  