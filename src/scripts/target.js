const MovingObject = require("./moving_object")

class Target extends MovingObject {
    static RADIUS = 25

    constructor (options) {
        super(options)
    }
     
    draw (ctx){
        const targImg = document.getElementById("targetImg")
        ctx.drawImage(targImg, this.pos.x, this.pos.y, Target.RADIUS * 2, Target.RADIUS * 2)
    }
}

module.exports = Target
  