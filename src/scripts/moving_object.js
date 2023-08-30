const Game = require('./game')


class MovingObject {
    static WIDTH = innerWidth * 4
    static HEIGHT = innerHeight * 4

    constructor(options) {
        this.vel = options.vel || {x: 0, y: 0}
        this.game = options.game
        this.pos = options.pos || this.game.randomPosition()
        this.rads = 0
        this.ctx = this.game.ctx
    }

    move(delta) {
        delta = delta || 1
        // console.log(`object: ${this}`)
        // console.log(`pos: ${{x: this.pos.x, y: this.pos.y}}`)
        // console.log(`vel: ${{x: this.vel.x, y: this.vel.y}}`)
        this.pos.x += this.vel.x * delta / 40;
        this.pos.y += this.vel.y * delta / 40;
        // const pos = this.pos           
    }

    remove(object) {
        this.game.remove(this)
    }

    isOobRight(pos) {
        return pos.x > Game.WIDTH
    }

    isOobLeft(pos) {
        return pos.x < 0
    }

    isOobUp(pos) {
        return pos.y < 0
    }

    isOobDown(pos) {
        return pos.y > Game.HEIGHT
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
  