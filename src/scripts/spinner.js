const MovingObject = require("./moving_object")
const Util = require("./util")
const Bullet = require("./bullet")

class Spinner {
    static SPINNER_SIZE = 150
    static MIN_ANG_SPD = 5.0

    constructor(options) { 
        const innerHeight = window.innerHeight
        const innerWidth = window.innerWidth

        this.game = options.game
        this.vel = {x: 0, y: 0}
        this.hiddenVel = this.game.background.vel
        this.ctx = this.game.ctx
        // console.log(this.game.background.vel)
        this.drawingPos = {x: innerWidth/2.0 - Spinner.SPINNER_SIZE/2.0, y: innerHeight/2.0 - Spinner.SPINNER_SIZE/2.0}
        this.hiddenPos = {x: innerWidth/2.0 - Spinner.SPINNER_SIZE/2.0 + this.game.background.pos.x, y: innerHeight/2.0 - Spinner.SPINNER_SIZE/2.0 + this.game.background.pos.y}        
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
        ctx.drawImage(spinnerImg, this.drawingPos.x, this.drawingPos.y, Spinner.SPINNER_SIZE, Spinner.SPINNER_SIZE)
        
        ctx.restore()
    }

    move(delta) {
        delta = delta || 1
        // console.log(`object: ${this}`)
        // console.log(`pos: ${{x: this.pos.x, y: this.pos.y}}`)
        // console.log(`vel: ${{x: this.vel.x, y: this.vel.y}}`)
        this.hiddenPos.x += this.hiddenVel.x * delta / 40;
        this.hiddenPos.y += this.hiddenVel.y * delta / 40;

        // const pos = this.pos           
    }

    fireBullet() {
        const norm = Util.norm(this.hiddenVel)
        // console.log(norm)

        if (norm === 0) {
            return
        }

        const relVel = Util.scale(Util.dir(this.hiddenVel), Bullet.SPEED)

        const bulletVel = {x: relVel.x + this.hiddenVel.x, y: relVel.y + this.hiddenVel.y}

        const bullet = new Bullet({
            vel: bulletVel,
            pos: this.drawingPos,
            game: this.game
        })

        // console.log(bullet)
        this.game.add(bullet)
    }
}

module.exports = Spinner
  