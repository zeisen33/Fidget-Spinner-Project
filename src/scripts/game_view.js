// function GameView(game, ctx) {
//     this.ctx = ctx;
//     this.game = game;
//     // this.target = this.game.addTarget();
// }

// GameView.prototype.start = function start() {
//     // this.bindKeyHandlers();
//     this.lastTime = 0;

//     requestAnimationFrame(this.animate.bind(this));
// }

// GameView.prototype.animate = function animate(time) {
//     const timeDelta = time - this.lastTime;

//     this.game.step(timeDelta);
//     this.game.draw(this.ctx);
// }

// module.exports = GameView;