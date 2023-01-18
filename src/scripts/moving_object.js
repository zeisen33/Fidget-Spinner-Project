class MovingObject {
    constructor(options) {
        this.xPos = options.xPos
        this.yPos = options.yPos
        this.xVel = 0
        this.yVel = 0
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
        this.rads = 0
    }

    animate (ctx) {
        this.draw(ctx)
    }

    drawTarget (ctx){
        const targImg = document.getElementById("targetImg")
        ctx.drawImage(targImg, this.x, this.y, 50, 50)
    }

    move () {
        this.x += 10;
        this.y += 10;
        this.animate(this.context)
    }
}

module.exports = Target
  