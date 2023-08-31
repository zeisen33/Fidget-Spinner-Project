

const Target = require("./target.js");
const Bullet = require("./bullet.js");
const Spinner = require("./spinner.js")
const Background = require("./background.js")

class Game {
    static DIM_X = window.innerWidth * 4
    static DIM_Y = window.innerHeight * 4

    constructor() {
        this.spinners = []
        this.targets = []
        this.bullets = []
        this.background = new Background({game: this})

        this.addTarget()
    }

    // getGameWidth() {
    //     return Game.WIDTH
    // }
    // getGameHeight() {
    //     return Game.HEIGHT
    // }

    add(object) {
        if (object instanceof Target) {
            this.targets.push(object)
        } else if (object instanceof Bullet) {
            this.bullets.push(object)
        } else if (object instanceof Spinner) {
            this.spinners.push(object)
        } else {
            throw new Error("unknown type of object")
        }
    }

    addTarget() {
        this.add(new Target({pos: this.randomPosition(), game: this}))
    }

    addSpinner() {
        const spinner = new Spinner({game: this})
        this.add(spinner)
        return spinner
    }

    randomPosition() {
        const xPos = Math.random() * window.innerWidth
        const yPos = Math.random() * window.innerHeight
        return {x: xPos, y: yPos}
    }

    draw(ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        this.allObjects().forEach(object => {
            // console.log(object)
            object.draw(ctx)
        })
    }

    moveObjects(delta) {
        // console.log(this.allObjects())
        this.allObjects().forEach(object => object.move(delta))
    }

    step(delta) {
        this.moveObjects(delta)
    }

    remove(object) {
        if (object instanceof Bullet) {
            this.bullets.splice(this.bullets.indexOf(object), 1);
          } else if (object instanceof Target) {
            this.targets.splice(this.targets.indexOf(object), 1);
          } else if (object instanceof Spinner) {
            this.spinners.splice(this.spinners.indexOf(object), 1);
          } else {
            throw new Error("unknown type of object");
          }
    }

    allObjects() {
        const allObjects = [].concat(this.background, this.spinners, this.targets, this.bullets)
        return allObjects
    }

    up() {
        // console.log('up')
        // console.log(this.background.vel)
        this.background.vel.y += 1
        // console.log(this.background.vel)
    }

    down() {
        this.background.vel.y -= 1
    }

    left() {
        this.background.vel.x += 1
    }

    right() {
        this.background.vel.x -= 1
    }
}

module.exports = Game
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