// use createPattern() or make bgroundImg a canvas and drawImg(bgroundImg.translate(xvel, yvel))

const MovingObject = require ("./moving_object")
const Game = require("./game")
const Util = require("./util")
const Spinner = require("./spinner")

class Background extends MovingObject {
    static DIM_X = window.innerWidth * 4
    static DIM_Y = window.innerHeight * 4
    
    constructor (options) {
        // Why can't I use Game.DIM_X or Game.DIM_Y here?
        // console.log(`innerHeight: ${window.innerHeight}`)
        super(options)
        // console.log(Background.DIM_X)
        // console.log(Game.WIDTH)
        // console.log(this.game)
        // console.log(this.game.width)
        // console.log(this.game.WIDTH)
        // console.log(this.game.getGameHeight())
        this.bgroundImg = document.getElementById("bground");
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.pos = {x: Background.DIM_X / 2, y: Background.DIM_Y / 2}
        this.scroll = {x: this.width / 2 - Spinner.SPINNER_SIZE / 2, y: this.height / 2 - Spinner.SPINNER_SIZE / 2}
        // this.stopY = this.height / 2 - Spinner.SPINNER_SIZE / 2
        // this.stopX = this.width / 2 - Spinner.SPINNER_SIZE / 2
        // this.stopYDown = this.height / 2 + Spinner.SPINNER_SIZE / 2
    }


    // Overwrites movingObject.move
    move() {
        
        // Can't move Out of Bounds (Oob)
        if (this.isOobUp(this.pos)) {
            console.log(`oobUp`)
            this.pos.y = Background.DIM_Y
            this.vel.y = 0
            this.scroll.y = 410
        } else if (this.isOobDown(this.pos)) {
            console.log('oobDown')
            this.pos.y = 150
            this.vel.y = 0
            this.scroll.y = 410 + 150
        } else if (this.isOobLeft(this.pos)) {
            console.log('oobLeft')
            this.pos.x = 0
            this.vel.x = 0
            // this.scroll.x = 257.5 
        } else if (this.isOobRight(this.pos)) {
            console.log('oobRight')
            this.pos.x = Background.DIM_X
            this.vel.x = 0
            // this.scroll.x = 257.5
        }
        
        this.pos.y += this.vel.y
        this.scroll.y += this.vel.y
        this.pos.x += this.vel.x
        // this.scroll.x += this.vel.x

        // Scroll height in [0, innerHeight)
        if (this.scroll.y < 0) {
            this.scroll.y = this.height + this.scroll.y
        } else {

            this.scroll.y %= this.height
        }

        // if (this.scroll.x < 0) {
        //     this.scroll.x = this.width + this.scroll.x
        // } else {
        //     this.scroll.x %= this.width
        // }
    }

    draw (ctx) {
        console.log(`pos: ${JSON.stringify(this.pos)}`)
        // console.log(`vel: ${JSON.stringify(this.vel)}`)
        // console.log(`scroll: ${JSON.stringify(this.scroll.x)}`)
        this.move()
        
        ctx.clearRect(0, 0, Background.DIM_X, Background.DIM_Y)
        
        const pattern = ctx.createPattern(this.bgroundImg, "repeat")

        ctx.fillStyle = pattern

        ctx.save()
        ctx.translate(this.pos.x, this.pos.y)
        ctx.fillRect(-this.pos.x, -this.pos.y, Background.DIM_X, Background.DIM_Y)
        ctx.restore()
        
        
    }
}

module.exports = Background