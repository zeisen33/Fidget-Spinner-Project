const MovingObject = require ("./moving_object")
const Game = require("./game")
const Util = require("./util")

class Background extends MovingObject {
    static DIM_X = window.innerWidth * 4
    static DIM_Y = window.innerHeight * 4
    
    constructor (options) {
        // Why can't I use Game.DIM_X or Game.DIM_Y here?

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
        this.scroll = {x: this.pos.x % this.width, y: this.pos.y % this.height}
        console.log(this.pos)
        console.log(this.scroll)
    }

    moveUp () {
        console.log('moving up')
        this.pos.y += this.vel.y
    }

    moveDown() {
        
    }

    // draw(ctx) {
    //     ctx.drawImage(this.bgroundImg, this.pos.x, this.pos.y)
    // }

    draw (ctx) {
        // console.log(`pos: ${JSON.stringify(this.pos.x)}`)
        // console.log(`scroll: ${JSON.stringify(this.scroll)}`)
        // Bottom of screen = top of Image
        ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scroll.y, 0, this.scroll.y, this.width, this.height - this.scroll.y)
        
        // Top of screen = bottom of image
        ctx.drawImage(this.bgroundImg, 0, this.height - this.scroll.y, this.width, this.scroll.y, 0, 0, this.width, this.scroll.y)
    }
}

module.exports = Background