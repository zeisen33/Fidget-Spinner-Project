// const Target = require("./target.js");

// function Game() {
//     this.targets = [];
//     this.addTarget();
// }

// Game.prototype.allObjects = function allObjects() {
//     return [].concat(this.targets)
// }

// Game.prototype.add = function add(object) {
//     if (object instanceof Target) {
//         this.targets.push(object);
//     }
// }

// Game.prototype.addTarget = function addTarget() {
//     this.add(new Target({ game: this}))
// }

// Game.prototype.step = function step(delta) {
//     this.moveObjects(delta);
// }

// Game.prototype.moveObjects = function moveObjects(delta) {
//     // debugger
//     this.targets[0].move(delta);
// }

// Game.prototype.draw = function draw(ctx) {
//     ctx.clearRect(0,0, innerWidth, innerHeight);
//     ctx.drawImage(img, 0,0)

//     this.allObjects().forEach(function(object) {
//         object.draw(ctx)
//     })
// }

// module.exports = Game;