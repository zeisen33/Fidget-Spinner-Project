// use createPattern() or make bgroundImg a canvas and drawImg(bgroundImg.translate(xvel, yvel))

const MovingObject = require ("./moving_object")
const Game = require("./game")
const Util = require("./util")
const Spinner = require("./spinner")

class Background extends MovingObject {

    // CHANGE to 4+
    static DIM_X = window.innerWidth * 1.5
    static DIM_Y = window.innerHeight * 1.5

    constructor (options) {
        super(options)
        this.bgroundImg = document.getElementById("bground");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.pos = {x: Background.DIM_X / 2, y: Background.DIM_Y / 2}
        this.stop = {   right: this.width / 2 - Spinner.SPINNER_SIZE / 2,
                        left: this.width / 2 + Spinner.SPINNER_SIZE / 2,
                        up: this.height / 2 - Spinner.SPINNER_SIZE / 2,
                        down: this.height / 2 + Spinner.SPINNER_SIZE / 2
                    }
        // when Spin speed at lowest, maxSpeed = 0
        this.maxSpeed = Spinner.START_ANG_SPD - Spinner.MIN_ANG_SPD
        // console.log(JSON.stringify(this.pos))
    }

    // Overwrites movingObject.move
    move(delta) {
        // Need delta so vel formula calculated same way as MovingObj_relVel
        delta = delta || 1

        // x and y vel must be less than or equal to max speed
        // Cases where limiting is necessary: > 0 and > max, < 0 and abs > max
        let dims = ['x','y']
        for (let i = 0; i < dims.length; i++) {
            if (this.vel[dims[i]] > 0 && this.vel[dims[i]] > this.maxSpeed) {
                this.vel[dims[i]] = this.maxSpeed
            } else if (this.vel[dims[i]] < 0 && Math.abs(this.vel[dims[i]]) > this.maxSpeed) {
                this.vel[dims[i]] = -1 * this.maxSpeed
            }
        }

        // Can't move Out of Bounds (Oob)
        // bground moves opposite of spinner movement
        if (this.isOobUp(this.pos)) {
            // console.log(`oobUp`)
            this.pos.y = Background.DIM_Y
            this.vel.y = 0
        } else if (this.isOobDown(this.pos)) {
            // console.log('oobDown')
            this.pos.y = 0
            this.vel.y = 0
        } else if (this.isOobLeft(this.pos)) {
            // console.log('oobLeft')
            this.pos.x = Background.DIM_X
            this.vel.x = 0
        } else if (this.isOobRight(this.pos)) {
            // console.log('oobRight')
            this.pos.x = 0
            this.vel.x = 0
        }
        
        this.pos.y += this.vel.y * delta/40
        this.pos.x += this.vel.x * delta/40
    }


    draw (ctx) {
        // console.log(`Xspeed: ${this.vel.x}, maxSpeed: ${this.maxSpeed}`) 
        // console.log(`pos: ${JSON.stringify(this.pos.y)}`)
        // console.log(`vel: ${JSON.stringify(this.vel)}`)
        this.move()
        
        ctx.clearRect(0, 0, Background.DIM_X, Background.DIM_Y)

        const pattern = ctx.createPattern(this.bgroundImg, "repeat")
        ctx.fillStyle = pattern
        ctx.save()
        ctx.translate(this.pos.x, this.pos.y)
        ctx.fillRect(-this.pos.x, -this.pos.y, Background.DIM_X, Background.DIM_Y)
        ctx.restore()
                
        // if pos approaching top
        if (this.pos.y > Background.DIM_Y - this.stop.up) {
            // then clear from top of screen to stopping point - scroll (maxY - posY)
            ctx.clearRect(0, 0, this.width, this.stop.up - (Background.DIM_Y - this.pos.y))
          
          // if pos approaching bottom
        } else if (this.pos.y < this.stop.down) {
            // then clear from bottom of screen + scroll to stopping point
            // clearRect(x, y, width, height) with x,y = topLeft
            ctx.clearRect(0, this.stop.down + this.pos.y, this.width, this.height)
        }

        // Separately, if pos approaching right/left
        if (this.pos.x > Background.DIM_X - this.stop.right) {
            ctx.clearRect(0, 0, this.stop.right - (Background.DIM_X - this.pos.x), this.height)
        } else if (this.pos.x < this.stop.left) {                        
            ctx.clearRect(this.stop.left + this.pos.x, 0, this.width, this.height)
        }        
    }
    
    maxSpeedUp() {
        this.maxSpeed += 1
    }

    maxSpeedDown() {
        this.maxSpeed -= 1
        if (this.maxSpeed < 0) {
            this.maxSpeed = 0
        }
    }

    isOobRight(pos) {
        return pos.x < 0
    }
    
    isOobLeft(pos) {
        return pos.x > MovingObject.WIDTH
    }

    isOobUp(pos) {
        // console.log(MovingObject.HEIGHT)
        return pos.y > MovingObject.HEIGHT
    }

    isOobDown(pos) {
        return pos.y < 0
    }

    isOobX(pos) {
        return this.isOobRight(pos) || this.isOobLeft(pos)
    }

    isOobY(pos) {
        return this.isOobUp(pos) || this.isOobDown(pos)
    }

    isOob(pos) {
        return this.isOobX(pos) || this.isOobY(pos)
    }
    
}

module.exports = Background