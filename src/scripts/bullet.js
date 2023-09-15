// Might want to recrop spinner img
const Util = require('./util')

const MovingObject = require("./moving_object")

class Bullet extends MovingObject{
    static RADIUS = 10
    static SPEED = 5
    static SPINNER_SIZE = 150

    constructor (options) {
        super(options)
        // console.log(this.rads)
        this.spinner = this.game.spinners[0]
        const center = {x: window.innerWidth / 2.0, y: window.innerHeight / 2.0}
        this.pos = {x: center.x - (Bullet.SPINNER_SIZE/2.0) * Math.sin(-1 * this.rads), y: center.y - (Bullet.SPINNER_SIZE/2.0) * Math.cos(-1 * this.rads)}
    }

    isCollidedWith(target) {
        console.log(`bulletPos: ${JSON.stringify(this.pos)}, targetPos: ${JSON.stringify(target.pos)}`)
        return Util.distance(this.pos, target.pos) < this.radius + target.radius 
    }

    draw (ctx) {
        // debugger
        // console.log(this.rads)
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