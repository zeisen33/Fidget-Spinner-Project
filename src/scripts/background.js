class Background {
    constructor () {
        this.bgroundImg = document.getElementById("bground");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.ySpeed = 10;
        this.xSpeed = 0;
        this.scrollHeight = 0;
        this.animate = this.animate.bind(this)
        this.moveUp = this.moveUp.bind(this)
        this.yRepeatCount = 0
        this.maxYRepeats = 4
        this.stoppingHeight = window.innerHeight/2.0 - 80
    }

    moveUp () {
        let newScrollHeight = (this.scrollHeight + this.ySpeed) % this.height;
        if (this.yRepeatCount < this.maxYRepeats || newScrollHeight <= this.stoppingHeight ) {
            this.scrollHeight += this.ySpeed;
            this.yRepeatCount += Math.floor(this.scrollHeight / this.height)
            this.scrollHeight %= this.height;
        }
        
    }

    drawBackground (ctx) {
        // bottom of screen = top of image
        // if (this.yRepeatCount <= this.maxYRepeats) {
            ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scrollHeight, 0, this.scrollHeight, this.width, this.height - this.scrollHeight)
        // }

        if (this.yRepeatCount < this.maxYRepeats) {
        // top of screen = bottom of image
            ctx.drawImage(this.bgroundImg, 0, this.height - this.scrollHeight, this.width, this.scrollHeight, 0, 0, this.width, this.scrollHeight)
        }
    }


    animate (ctx) {
        this.moveUp ()
        this.drawBackground(ctx)
    }
}

module.exports = Background