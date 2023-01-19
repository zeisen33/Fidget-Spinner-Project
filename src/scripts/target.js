class Target {
    constructor () {
        this.x = 100
        this.y = 100
        this.animate = this.animate.bind(this)
        this.move = this.move.bind(this)
        this.radius = 25
    }
     
    drawTarget (ctx){
        const targImg = document.getElementById("targetImg")
        ctx.drawImage(targImg, this.x, this.y, 50, 50)
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
  