class Spinner {
    constructor (context){
        this.context = context
        this.x = 200
        this.y = 200
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
        this.rotate = this.rotate.bind(this)
        this.rads = 0
    }
    
    drawSpinner (ctx){
        ctx.fillStyle = "red";
        //x, y, width, height
        ctx.fillRect(this.x,this.y,40,50);
        ctx.rotate(this.rads)
    }

    animate (ctx) {
        this.drawSpinner(ctx)
    }

    move () {
        this.x += 10;
        this.y += 10;
        this.animate(this.context)
    }

    rotate () {
        this.rads += 60
        this.animate(this.context)
    }
}

module.exports = Spinner
  