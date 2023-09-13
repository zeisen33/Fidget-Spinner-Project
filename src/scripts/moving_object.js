const Game = require('./game')


class MovingObject {

    // CHANGE to 4+
    static WIDTH = window.innerWidth * 1.5
    static HEIGHT = window.innerHeight * 1.5

    constructor(options) {
        this.game = options.game
        this.vel = options.vel || {x: 0, y: 0}
        this.pos = options.pos || this.game.randomPosition()
        this.rads = 0
        this.ctx = this.game.ctx
        this.isBounceable = false
    }

    move(delta) {
        delta = delta || 1
        this.relVel = {x: this.game.background.vel.x + this.vel.x, y: this.game.background.vel.y + this.vel.y}
        // console.log(`object: ${this}`)
        // console.log(`pos: ${{x: this.pos.x, y: this.pos.y}}`)
        // console.log(`vel: ${{x: this.vel.x, y: this.vel.y}}`)
        this.pos.x += this.relVel.x * delta / 40;
        this.pos.y += this.relVel.y * delta / 40;
        // const pos = this.pos           
        // console.log(`bground Y vel: ${this.game.background.vel.y}`)
        // console.log(`target y vel: ${this.vel.y}`)
        if (this.isOobX(this.pos)) {
            if (this.isBounceable) {
                this.vel.x = -1 * this.vel.x
            } else {
                this.game.remove(this)
            }
        }
        if (this.isOobY(this.pos)) {
            if (this.isBounceable) {
                this.vel.y = -1 * this.vel.y
            } else {
                this.game.remove(this)
            }
        }
    }

    remove(object) {
        this.game.remove(this)
    }

    isOobRight(pos) {
        return pos.x > MovingObject.WIDTH
    }

    isOobLeft(pos) {
        return pos.x < 0
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

module.exports = MovingObject
  