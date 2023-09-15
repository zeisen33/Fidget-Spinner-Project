const MovingObject = require("./moving_object")

class Bullet extends MovingObject{
    static RADIUS = 10
    static SPEED = 5
    static SPINNER_SIZE = 150

    constructor (options) {
        super(options)
        this.spinner = this.game.spinners[0]
        this.rads = this.spinner.rads
        const center = {x: window.innerWidth / 2.0, y: window.innerHeight / 2.0}
        this.pos = {x: center.x + (Bullet.SPINNER_SIZE/2.0) * Math.cos(this.rads), y: center.x + (Bullet.SPINNER_SIZE/2.0) * Math.sin(this.rads)}
    }

    draw (ctx) {
        // debugger
        console.log(this.rads)
        const blltImg = document.getElementById("bulletImg");
        // debugger
        ctx.drawImage(blltImg, this.pos.x, this.pos.y, Bullet.RADIUS, Bullet.RADIUS);
    }

    // hitTarget () {
    //     this.remove()
    //     targ.hit
    // }
}

module.exports = Bullet