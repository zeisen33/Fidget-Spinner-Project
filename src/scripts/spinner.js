const MovingObject = require("./moving_object")
const Util = require("./util")
const Bullet = require("./bullet")

class Spinner extends MovingObject {
    static SPINNER_SIZE = 150
    static MIN_ANG_SPD = 5.0

    constructor(options){
        const innerHeight = window.innerHeight
        const innerWidth = window.innerWidth

        super(options)
        this.pos = {x: innerWidth/2.0 - Spinner.SPINNER_SIZE/2.0, y: innerHeight/2.0 - Spinner.SPINNER_SIZE/2.0}
        this.rads = 0
        this.center = {x: innerWidth/2.0, y: innerHeight/2.0}
        this.angularSpd = Spinner.MIN_ANG_SPD
    }

    draw(ctx) {
        ctx.save()
        ctx.translate(this.center.x, this.center.y)
        ctx.rotate(this.rads + Math.PI/64.0)
        this.rads -= this.angularSpd * Math.PI/640.0
        ctx.translate(-1.0 * this.center.x, -1.0 * this.center.y)

        const spinnerImg = document.getElementById("spinnerImg")
        ctx.drawImage(spinnerImg, this.pos.x, this.pos.y, Spinner.SPINNER_SIZE, Spinner.SPINNER_SIZE)
        
        ctx.restore()
    }

    fireBullet() {
        const norm = Util.norm(this.vel)
        console.log(norm)

        if (norm === 0) {
            return
        }

        const relVel = Util.scale(Util.dir(this.vel), Bullet.SPEED)

        const bulletVel = {x: relVel.x + this.vel.x, y: relVel.y + this.vel.y}

        const bullet = new Bullet({
            vel: bulletVel,
            pos: this.pos,
            game: this.game
        })

        console.log(bullet)
        this.game.add(bullet)
    }
}

module.exports = Spinner
  