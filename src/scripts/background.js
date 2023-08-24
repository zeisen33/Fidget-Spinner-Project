const MovingObject = require ("./moving_object")
const Game = require("./game")

class Background extends MovingObject {
    // static STOP_HEIGHT = 4000
    // static STOP_WIDTH = 2500

    constructor (options) {
        super(options)
        this.bgroundImg = document.getElementById("bground");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.scrollHeight = 0;
        this.yRepeatCount = 0
        this.maxYRepeats = 4
        this.stoppingHeight = window.innerHeight/2.0 - 80
        this.stopHeight = window.innerHeight * 4
        // this.stopHeight = Game.HEIGHT
        // this.stopWidth = Game.WIDTH
    }

    moveUp () {
        // alert('moveUp')
        let newScrollHeight = (this.scrollHeight + this.vel.y) % this.height;
        if (this.pos.y < this.stopHeight || newScrollHeight <= this.stoppingHeight ) {
            this.scrollHeight += this.vel.y;
            // this.yRepeatCount += Math.floor(this.scrollHeight / this.height)
            this.scrollHeight %= this.height;
        } else {
            this.pos.y = this.stopHeight
            this.vel.y = 0
        }
    }

    moveDown() {
        // alert('moveDown')
        let newScrollHeight = (this.scrollHeight + this.vel.y) % this.height
        if (this.pos.y > -1 * this.stopHeight || newScrollHeight >= -1 * this.stoppingHeight) {
            this.scrollHeight += this.vel.y
            // this.yRepeatCount -= Math.ceil(this.scrollHeight / this.height)
            this.scrollHeight %= -1 * this.height
        } else {
            this.pos.y = -1 * this.stopHeight
            this.vel.y = 0
        }
    }

    // draw(ctx) {
    //     ctx.drawImage(this.bgroundImg, this.pos.x, this.pos.y)
    // }

    draw (ctx) {
        console.log('draw')
        // console.log(Background.STOP_HEIGHT)
        // console.log(Background.STOP_WIDTH)
        console.log(`pos: ${JSON.stringify(this.pos.y)}`)
        console.log(`vel: ${this.vel.y}`)
        console.log(`scrollHeight: ${this.scrollHeight}`)
        console.log(`yRepeats: ${this.yRepeatCount}`)


        if (this.pos.y > this.stopHeight) {
            this.pos.y = this.stopHeight
            this.vel.y = 0
            // this.clearRect()
        }
        if (this.pos.y < -1 * this.stopHeight) {
            this.pos.y = -1 * this.stopHeight
            this.vel.y = 0
        }
        
        if (this.vel.y > 0) {
            this.moveUp()
        } else if (this.vel.y < 0) {
            this.moveDown()
        }
        
        if (this.pos.y > this.stopHeight) {
            alert(`y: ${this.pos.y}`)
        }

        // CASES

        // Split into y pos, y neg, y pos && within innerHeight of stopHeight

        if (this.pos.y >= 0) {
            // y pos and close to stop
            if (this.stopHeight - this.height < this.pos.y) {
                console.log('stopping')
                ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scrollHeight, 0, this.scrollHeight, this.width, this.height - this.scrollHeight)
                ctx.clearRect(0, 0, this.width, this.stoppingHeight)
            } else {
                console.log('going')
                ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scrollHeight, 0, this.scrollHeight, this.width, this.height - this.scrollHeight)
                ctx.drawImage(this.bgroundImg, 0, this.height - this.scrollHeight, this.width, this.scrollHeight, 0, 0, this.width, this.scrollHeight)
            }
        }
        





        // bottom of screen = top of image
        // if (this.pos.y < this.stopHeight) {
        //     ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scrollHeight, 0, this.scrollHeight, this.width, this.height - this.scrollHeight)
        // }

        // top of screen = bottom of image
        // if (this.pos.y < this.stopHeight) {
        //     ctx.drawImage(this.bgroundImg, 0, this.height - this.scrollHeight, this.width, this.scrollHeight, 0, 0, this.width, this.scrollHeight)
        // }




        // if (this.yRepeatCount > this.maxYRepeats) {
        //     alert(`y: ${this.pos.y}`)
        // }

        // // bottom of screen = top of image
        // if (this.yRepeatCount <= this.maxYRepeats) {
        //     ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scrollHeight, 0, this.scrollHeight, this.width, this.height - this.scrollHeight)
        // }

        // // top of screen = bottom of image
        // if (this.yRepeatCount < this.maxYRepeats) {
        //     ctx.drawImage(this.bgroundImg, 0, this.height - this.scrollHeight, this.width, this.scrollHeight, 0, 0, this.width, this.scrollHeight)
        // }



    }
}

module.exports = Background