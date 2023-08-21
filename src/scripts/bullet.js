const MovingObject = require("./moving_object")

class Bullet extends MovingObject{
    static RADIUS = 10
    static X_SPEED = 5
    static Y_SPEED = 5

    constructor (options) {
        this.pos = {x: 200, y: 200}
    }

    draw (ctx) {
        // debugger
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