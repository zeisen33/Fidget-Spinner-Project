const MovingObject = require ("./moving_object")

class Background extends MovingObject {
    constructor (options) {
        super(options)
        this.bgroundImg = document.getElementById("bground");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.scrollHeight = 0;
        this.yRepeatCount = 0
        this.maxYRepeats = 4
        this.stoppingHeight = window.innerHeight/2.0 - 80
    }

    // moveUp () {
        // let newScrollHeight = (this.scrollHeight + this.vel.y) % this.height;
        // if (this.yRepeatCount < this.maxYRepeats || newScrollHeight <= this.stoppingHeight ) {
        //     this.scrollHeight += this.vel.y;
        //     this.yRepeatCount += Math.floor(this.scrollHeight / this.height)
        //     this.scrollHeight %= this.height;
        // }
        
    // }

    // draw(ctx) {
    //     ctx.drawImage(this.bgroundImg, this.pos.x, this.pos.y)
    // }

    draw (ctx) {
        let newScrollHeight = (this.scrollHeight + this.vel.y) % this.height;
        if (this.yRepeatCount < this.maxYRepeats || newScrollHeight <= this.stoppingHeight ) {
            this.scrollHeight += this.vel.y;
            this.yRepeatCount += Math.floor(this.scrollHeight / this.height)
            this.scrollHeight %= this.height;
        }
        

        // bottom of screen = top of image
        if (this.yRepeatCount <= this.maxYRepeats) {
            ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scrollHeight, 0, this.scrollHeight, this.width, this.height - this.scrollHeight)
        }

        if (this.yRepeatCount < this.maxYRepeats) {
        // top of screen = bottom of image
            ctx.drawImage(this.bgroundImg, 0, this.height - this.scrollHeight, this.width, this.scrollHeight, 0, 0, this.width, this.scrollHeight)
        }
    }

}

module.exports = Background