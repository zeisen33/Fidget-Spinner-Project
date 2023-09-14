const MovingObject = require("./moving_object")

class Target extends MovingObject {
    static RADIUS = 25

    constructor (options) {
        super(options)
        this.isBounceable = true
        this.name = 'Targ'
    }
     
    draw (ctx){
        const targImg = document.getElementById("targetImg")
        ctx.drawImage(targImg, this.pos.x, this.pos.y, Target.RADIUS * 2, Target.RADIUS * 2)
        // console.log(`pos: ${JSON.stringify(this.pos)}`)
    }
}

module.exports = Target
  