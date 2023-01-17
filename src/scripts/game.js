const Target = require("./target.js");

function Game() {
    this.targets = [];
    this.addTarget();
}

Game.prototype.add = function add(object) {
    if (object instanceof Target) {
        this.targets.push(object);
    }
}

Game.prototype.addTarget = function addTarget() {
    this.addTarget(new Target({ game: this}))
}

Game.prototype.step = function step(delta) {
    this.moveObjects(delta);
}

Game.prototype.moveObjects = function moveObjects(delta) {
    this.targets.move(delta);
}

module.exports = Game;