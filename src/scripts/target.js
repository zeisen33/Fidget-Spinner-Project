class Target {
    constructor (context){
        this.context = context
        this.x = 100
        this.y = 100
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
    }
    
    drawTarget (ctx){
        // debugger
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2*Math.PI, true);
        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
    }

    animate (ctx) {
        this.drawTarget(ctx)
    }

    move () {
        this.x += 10;
        this.y += 10;
        this.animate(this.context)
    }
}

module.exports = Target
  