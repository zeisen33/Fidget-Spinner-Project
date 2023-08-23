const MovingObject = require ("./moving_object")
const Game = require("./game")

class Background extends MovingObject {
    static STOP_HEIGHT = 4000
    static STOP_WIDTH = 2500

    constructor (options) {
        super(options)
        this.bgroundImg = document.getElementById("bground");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.scrollHeight = 0;
        this.yRepeatCount = 0
        this.maxYRepeats = 4
        this.stoppingHeight = window.innerHeight/2.0 - 80
        // this.stopHeight = Game.HEIGHT
        // this.stopWidth = Game.WIDTH
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
        console.log(Background.STOP_HEIGHT)
        console.log(Background.STOP_WIDTH)
        console.log(`pos: ${JSON.stringify(this.pos.y)}`)
        console.log(`vel: ${this.vel.y}`)
        console.log(`scrollHeight: ${this.scrollHeight}`)
        console.log(`yRepeats: ${this.yRepeatCount}`)

        let newScrollHeight = (this.scrollHeight + this.vel.y) % this.height;
        if (this.yRepeatCount < this.maxYRepeats || newScrollHeight <= this.stoppingHeight ) {
            this.scrollHeight += this.vel.y;
            if (this.vel.y === 0) {
                
            } else if (this.vel.y > 0) {
                this.yRepeatCount += Math.floor(this.scrollHeight / this.height)
            } else {
                this.yRepeatCount += Math.ceil(this.scrollHeight / this.height)
            }
            this.scrollHeight %= this.height;
        } else {
            this.vel.y = 0
        }
        

        // bottom of screen = top of image
        if (this.yRepeatCount <= this.maxYRepeats) {
            ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scrollHeight, 0, this.scrollHeight, this.width, this.height - this.scrollHeight)
        }

        if (this.yRepeatCount < this.maxYRepeats) {
        // top of screen = bottom of image
            ctx.drawImage(this.bgroundImg, 0, this.height - this.scrollHeight, this.width, this.scrollHeight, 0, 0, this.width, this.scrollHeight)
        }
    

        // if (this.game.isYoutOfBounds(this.pos)) {
        //     this.vel.y = 0
        // }
    }
}

module.exports = Background