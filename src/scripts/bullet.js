const Util = require('./util')
const Target = require('./target')

const MovingObject = require("./moving_object")

class Bullet extends MovingObject{
    static RADIUS = 7
    static SPEED = 5
    static SPINNER_SIZE = 150
    static LIFE_TIME = 5

    constructor (options) {
        super(options)
        // console.log(this.rads)
        this.spinner = this.game.spinners[0]
        const center = {x: window.innerWidth / 2.0, y: window.innerHeight / 2.0}
        this.pos = {x: center.x - (Bullet.SPINNER_SIZE/2.0) * Math.sin(-1 * this.rads), y: center.y - (Bullet.SPINNER_SIZE/2.0) * Math.cos(-1 * this.rads)}
        // this.hiddenPos = {x: this.pos.x - this.game.background.pos.x, y: this.pos.y - this.game.background.pos.y}
        this.time = Date.now()
    }

    isCollidedWith(target) {
        // console.log(`bulletPos: ${JSON.stringify(this.pos)}, targetPos: ${JSON.stringify(target.pos)}`)
        // console.log(`bulletPos: ${JSON.stringify(this.pos)}, targetPos: ${JSON.stringify(target.pos)}`)
        // console.log(`bulletPos: ${JSON.stringify(this.pos)}, targetPos: ${JSON.stringify(target.pos)}`)
        // console.log(Bullet.RADIUS)
        // console.log(Target.RADIUS)
        // console.log(Util.distance(this.pos, target.pos))
        return Util.distance(this.pos, target.pos) < Bullet.RADIUS + Target.RADIUS + 3
    }

    draw (ctx) {
        // debugger
        // console.log(this.pos.x)
        
        
        const blltImg = document.getElementById("bulletImg");
        // debugger
        ctx.drawImage(blltImg, this.pos.x, this.pos.y, Bullet.RADIUS * 2, Bullet.RADIUS * 2);
        
        // Remove bullet after LIFE_TIME seconds
        const now = Date.now()
        const fireTime = this.time
        const timeOut = Math.round((now - fireTime)/1000)
            // console.log(`now: ` + now)
            // console.log(fireTime)
            // console.log(timeOut)
    
        if (timeOut > Bullet.LIFE_TIME) {
            this.remove(this)
        }
        
    }



    // hitTarget () {
    //     this.remove()
    //     targ.hit
    // }
}

module.exports = Bullet