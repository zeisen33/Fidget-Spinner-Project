
const Game = require("./scripts/game.js");
const GameView = require("./scripts/game_view.js")

window.GameView = GameView
window.Game = Game

document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("background");
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    const ctx = canvasEl.getContext('2d')

    const game = new Game(ctx)
    new GameView(game, ctx).start()

})
  