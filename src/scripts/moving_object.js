class MovingObject {
    constructor(options) {
        this.pos = options.pos
        this.vel = options.vel || {x: 0, y: 0}
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
        this.game = options.game
        this.rads = 0
    }

    animate (ctx) {
        this.draw(ctx)
    }

    drawTarget (ctx){
        const targImg = document.getElementById("targetImg")
        ctx.drawImage(targImg, this.pos.x, this.pos.y, 50, 50)
    }

    move () {
        this.pos.x += 10;
        this.pos.y += 10;
        this.animate(this.game.ctx)
    }
}

module.exports = MovingObject
  