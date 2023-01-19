// const Target = require("./target.js");
// const Bullet = require("./bullet.js");
// const Spinner = require("./spinner.js")

// function Game() {
//     this.targets = [];
//     this.bullets = [];
//     this.spinners = []
// }

// Game.prototype.allObjects = function allObjects() {
//     return [].concat(this.targets, this.bullets, this.spinners)
// }

// Game.prototype.add = function add(object) {
//     if (object instanceof Target) {
//         this.targets.push(object);
//     } else if (object instanceof Bullet) {
//         this.bullets.push(object);
//     } else if (object instanceof Spinner) {
//         this.spinners.push(object);
//     } else {
//         throw new Error("unknown type of object")
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