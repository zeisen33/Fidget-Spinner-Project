class Spinner {
    constructor (context){
        this.context = context
        this.size = 150
        this.width = this.size
        this.height = this.size
        this.x = innerWidth/2.0 - this.width/2.0
        this.y = innerHeight/2.0 - this.height/2.0
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
        this.rotate = this.rotate.bind(this)
        this.rads = 0
        this.center = [innerWidth/2.0, innerHeight/2.0]
        this.angularSpd = 5.0
    }
    
    drawSpinner (ctx){
        const spinnerImg = document.getElementById("spinnerImg")
        ctx.drawImage(spinnerImg, this.x, this.y, this.width, this.height)
    }

    animate (ctx) {
        this.rotate(ctx)
        // this.drawSpinner(ctx)
    }

    move () {
        this.x += 10;
        this.y += 10;
        this.animate(ctx)
    }

    rotate (ctx) {
        ctx.save()
        ctx.translate(this.center[0], this.center[1])
        ctx.rotate(this.rads + Math.PI/64.0)
        this.rads -= this.angularSpd * Math.PI/640.0
        ctx.translate(-1.0 * this.center[0], -1.0 * this.center[1])
        this.drawSpinner(ctx)
        ctx.restore()
        // this.animate(this.context)
    }
}

module.exports = Spinner
  