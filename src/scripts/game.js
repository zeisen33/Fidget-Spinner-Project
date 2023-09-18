

const Target = require("./target.js");
const Bullet = require("./bullet.js");
const Spinner = require("./spinner.js")
const Background = require("./background.js");
const Util = require("./util")
const MovingObject = require("./moving_object.js")

class Game {
    // CHANGE to 4+
    static DIM_X = window.innerWidth * 1.5
    static DIM_Y = window.innerHeight * 1.5


    constructor() {
        console.log(Game.DIM_X)
        this.spinners = []
        this.targets = []
        this.bullets = []
        this.background = new Background({game: this})
        this.time = Date.now()
        this.score = 0
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
        // initiate new target OOB with randomVel
        let xPos = -100
        let yPos = -100
        let newTarg = new Target({pos: {x: xPos, y: yPos}, game: this, vel: this.randomVel(5)})

        // loop until target is in bounds and not close to spinner
        while (Util.distance({x: xPos, y: yPos}, {x: window.innerWidth / 2.0, y: window.innerHeight / 2.0}) < 3 * Spinner.SPINNER_SIZE/2.0
                || newTarg.isOob(newTarg)) { 
            xPos = Math.random() * window.innerWidth
            yPos = Math.random() * window.innerHeight
            newTarg.pos = {x: xPos, y: yPos}
        }
        this.add(newTarg)
    }

    addSpinner() {
        const spinner = new Spinner({game: this})
        this.add(spinner)
        return spinner
    }

    randomPosition() {
        let xPos = window.innerWidth/2.0, yPos = window.innerHeight/2.0

        // Random position can't be too close to spinner (within 3/2 * Spinner size of center)
        while (Util.distance({x: xPos, y: yPos}, {x: window.innerWidth / 2.0, y: window.innerHeight / 2.0}) < 3 * Spinner.SPINNER_SIZE/2.0
                // || this.isOob({x: xPos, y: yPos})) { 
        ) {
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
        this.checkCollisions()
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

    checkCollisions() {
        // console.log('checking Collisions')
        const target = this.targets[0]
        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i]

            // console.log(`targetPos: ${JSON.stringify(target.pos)}`)
            // console.log(`bullet ${i} Pos: ${JSON.stringify(bullet.pos)}`)
            if (bullet.isCollidedWith(target)) {
                // alert('target hit')
                console.log('target hit')
                this.targetHit(bullet, target)
                return
            }
        }
    }

    targetHit(bullet, target) {
        this.score += 1
        this.remove(bullet)
        this.remove(target)
        this.addTarget()
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
// isPosOob(pos) {
//     return this.isPosOobX(pos) || this.isPosOobY(pos)
// }
// isPosOobX(pos) {
//     return this.isPosOobLeft(pos) || this.isPosOobRight(pos)
// }
// isPosOobY(pos) {
//     return this.isPosOobUp(pos) || this.isPosOobDown(pos)
// }
// isPosOobLeft(pos) {
//     return pos.x <= 0
// }
// isPosOobRight(pos){
//     return pos.x >= Game.DIM_X
// }
// isPosOobUp(pos) {
//     return pos.y <= 0
// }
// isPosOobDown(pos) {
//     return pos.y >= Game.DIM_Y
// }
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