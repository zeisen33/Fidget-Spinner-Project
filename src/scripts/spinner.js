const MovingObject = require("./moving_object")

class Spinner extends MovingObject {
    static SPINNER_SIZE = 150
    static MIN_ANG_SPD = 5.0

    constructor(options){
        const innerHeight = window.innerHeight
        const innerWidth = window.innerWidth

        super(options)
        this.pos = {x: innerWidth/2.0 - Spinner.SPINNER_SIZE/2.0, y: innerHeight/2.0 - Spinner.SPINNER_SIZE/2.0}
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
        this.rotate = this.rotate.bind(this)
        this.rads = 0
        this.center = {x: innerWidth/2.0, y: innerHeight/2.0}
        this.angularSpd = Spinner.MIN_ANG_SPD
        this.ctx = this.game.ctx
    }
    
    drawSpinner (ctx){
        const spinnerImg = document.getElementById("spinnerImg")
        ctx.drawImage(spinnerImg, this.pos.x, this.pos.y, Spinner.SPINNER_SIZE, Spinner.SPINNER_SIZE)
    }

    animate (ctx) {
        this.rotate(ctx)
        // this.drawSpinner(ctx)
    }

    rotate (ctx) {
        ctx.save()
        ctx.translate(this.center.x, this.center.y)
        ctx.rotate(this.rads + Math.PI/64.0)
        this.rads -= this.angularSpd * Math.PI/640.0
        ctx.translate(-1.0 * this.center.x, -1.0 * this.center.y)
        this.drawSpinner(ctx)
        ctx.restore()
        // this.animate(this.context)
    }
}

module.exports = Spinner
  