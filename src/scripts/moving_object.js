class MovingObject {
    constructor(options) {
        this.vel = options.vel || {x: 0, y: 0}
        this.game = options.game
        this.pos = options.pos || this.game.randomPosition()
        this.rads = 0
        this.ctx = this.game.ctx
    }

    move(delta) {
        delta = delta || 1
        this.pos.x += this.vel.x * delta / 20;
        this.pos.y += this.vel.y * delta / 20;

        // const pos = this.pos
    }

    remove(object) {
        this.game.remove(this)
    }
}

module.exports = MovingObject
  