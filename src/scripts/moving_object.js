
class MovingObject {

    // CHANGE to 4+
    static WIDTH = window.innerWidth * 1.5
    static HEIGHT = window.innerHeight * 1.5
    static SPINNER_SIZE = 150

    constructor(options) {
        this.game = options.game
        this.vel = options.vel || {x: 0, y: 0}
        this.pos = options.pos || this.game.randomPosition()
        this.rads = 0
        this.ctx = this.game.ctx
        this.isBounceable = false
        this.stop = {   right: MovingObject.WIDTH / 2 + MovingObject.SPINNER_SIZE / 2,
                        left: MovingObject.WIDTH / 2 - MovingObject.SPINNER_SIZE / 2,
                        up: MovingObject.HEIGHT / 2 + MovingObject.SPINNER_SIZE / 2,
                        down: MovingObject.HEIGHT / 2 - MovingObject.SPINNER_SIZE / 2
                    }
        this.name = 'noName'
    }

    move(delta) {
        console.log(this.name)
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
            console.log('oobX')
            if (this.isBounceable) {
                this.vel.x = -1 * this.vel.x
            } else {
                this.game.remove(this)
            }
        }
        if (this.isOobY(this.pos)) {
            console.log('oobY')
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
        // console.log('oobRight')
        if (pos.x > MovingObject.WIDTH - this.stop.right) {
            console.log('oobRight')
        }
        return pos.x > MovingObject.WIDTH - this.stop.right
    }

    isOobLeft(pos) {
        // console.log('oobLeft')
        console.log(this.stop.left)
        if (pos.x < this.stop.left) {
            console.log('oobLeft')
        }
        return pos.x < this.stop.left
    }

    isOobUp(pos) {
        // console.log(MovingObject.HEIGHT)
        // console.log('oobUp')
        if (pos.y > this.stop.up) {
            console.log('oobUp')
        }
        return pos.y > this.stop.up
    }

    isOobDown(pos) {
        // console.log('oobDown')
        if (pos.y < MovingObject.HEIGHT - this.stop.down) {
            console.log('oobDown')
        }
        return pos.y < MovingObject.HEIGHT - this.stop.down
    }

    isOobX(pos) {
        console.log('check X')
        // console.log(this.pos)
        return this.isOobRight(pos) || this.isOobLeft(pos)
    }

    isOobY(pos) {
        // console.log(this.pos)
        return this.isOobUp(pos) || this.isOobDown(pos)
    }

    isOob(pos) {
        return this.isOobX(pos) || this.isOobY(pos)
    }
}

module.exports = MovingObject
  