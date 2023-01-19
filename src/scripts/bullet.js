class Bullet {
    constructor () {
        this.x = 200
        this.y = 200
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
        this.radius = 10
        this.xSpeed = 1
    }

    drawBullet (ctx) {
        // debugger
        const blltImg = document.getElementById("bulletImg");
        // debugger
        ctx.drawImg(blltImg, this.x, this.y, 50, 50);
    }

    animate (ctx) {
        this.drawBullet(ctx)
    }

    move () {
        this.x += this.xSpeed
        this.y += this.ySpeed
        this.animate(ctx)
    }
}

module.exports = Bullet