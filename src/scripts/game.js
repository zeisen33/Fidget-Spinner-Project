

const Target = require("./target.js");
const Bullet = require("./bullet.js");
const Spinner = require("./spinner.js")
const Background = require("./background.js");
const Util = require("./util")

class Game {
    // CHANGE to 4+
    static DIM_X = window.innerWidth * 1.5
    static DIM_Y = window.innerHeight * 1.5


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

        // change to randomPosition() and randomVel(5)
        this.add(new Target({pos: {x: Game.DIM_X/3, y: Game.DIM_Y/3}, game: this, vel: {x: 0, y: 5}}))
    }

    addSpinner() {
        const spinner = new Spinner({game: this})
        this.add(spinner)
        return spinner
    }

    randomPosition() {
        let xPos = window.innerWidth/2.0, yPos = window.innerHeight/2.0

        // Random position can't be too close to spinner (within 3/2 * Spinner size of center)
        while (Util.distance({x: xPos, y: yPos}, {x: window.innerWidth / 2.0, y: window.innerHeight / 2.0}) < 3 * Spinner.SPINNER_SIZE/2.0) {
            // console.log('too close!')
            xPos = Math.random() * window.innerWidth
            yPos = Math.random() * window.innerHeight
        }

        return {x: xPos, y: yPos}
    }

    // -5 <= randVel <= 5
    randomVel(scalar) {
        let randX = Math.random() * scalar
        let randY = Math.random() * scalar
        let dirX = Math.random()
        let dirY = Math.random()
        
        if (dirX < 0.5) {
            dirX = -1
        } else {
            dirX = 1
        }

        if (dirY < 0.5) {
            dirY = -1
        } else {
            dirY = 1
        }

        return {x: dirX * randX, y: dirY * randY}
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