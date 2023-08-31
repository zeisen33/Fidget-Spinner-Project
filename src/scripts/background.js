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
        this.scroll = {x: this.pos.x % this.width, y: this.height / 2 - Spinner.SPINNER_SIZE / 2}
        this.stopY = this.height / 2 - Spinner.SPINNER_SIZE / 2
        this.stopYDown = this.height / 2 + Spinner.SPINNER_SIZE / 2
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
            this.pos.x = 0
            this.vel.x = 0
        } else if (this.isOobRight(this.pos)) {
            this.pos.x = Background.DIM_X
            this.vel.x = 0
        }
        
        this.pos.y += this.vel.y
        this.scroll.y += this.vel.y

        // Scroll height in [0, innerHeight)
        if (this.scroll.y < 0) {
            this.scroll.y = this.height + this.scroll.y
        } else {

            this.scroll.y %= this.height
        }
        // this.pos.x += this.vel.x
        // this.scroll.x += this.vel.x
        // this.scroll.x %= this.height

    }

    draw (ctx) {
        console.log(`pos: ${JSON.stringify(this.pos.y)}`)
        console.log(`vel: ${JSON.stringify(this.vel.y)}`)
        console.log(`scroll: ${JSON.stringify(this.scroll.y)}`)
        this.move()
        // console.log(`pos: ${JSON.stringify(this.pos.x)}`)
        // console.log(`scroll: ${JSON.stringify(this.scroll)}`)
        

        // clearRect(0, 0, this.width, this.height)
        
        // if (this.height / 2 < Background.HEIGHT - this.pos.y)
        

        
        ctx.clearRect(0, 0, Background.DIM_X, Background.DIM_Y)
       
        

        // if approaching top
        // 3880 - 410 = 3470
        if (this.pos.y >= Background.DIM_Y - this.stopY) {
            console.log(this.stopY)
            console.log(Background.DIM_Y - this.stopY)
            // Handle if scrollY = 0, which happens when scrollY reaches exactly stopY
            // if (this.pos.y === Background.DIM_Y) {
            //     ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height, 0, this.stopY, this.width, this.height)
            // } else {
                // clip from scrollY to innerHeight and put it scrollY
                ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height, 0, this.scroll.y, this.width, this.height)
            // }   

        }

                // If approaching bottom
        else if (this.pos.y < 560) {
            console.log(this.stopYDown)
            // if (this.pos.y === 0) {
            //     ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height, 0, 0, this.width, this.stopYDown)
            // } else {

                // 3rd param if < 0 white space in middle, if > 0 shifts at 560
                ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height, 0, this.scroll.y - this.height, this.width, this.height)
            // }
        }
        else {
            
            
            // Bottom of screen = top of Image
            ctx.drawImage(this.bgroundImg, 0, 0, this.width, this.height - this.scroll.y, 0, this.scroll.y, this.width, this.height - this.scroll.y)
            
            // Top of screen = bottom of image
            ctx.drawImage(this.bgroundImg, 0, this.height - this.scroll.y, this.width, this.scroll.y, 0, 0, this.width, this.scroll.y)
            
                    }
            
            


        
        Util.drawCircle(ctx, "yellow", {x: 0, y: 0})
        Util.drawCircle(ctx, "blue", {x: 0, y: this.scroll.y})
        Util.drawCircle(ctx, "green", {x: 0, y: window.innerHeight / 2 - 75})
        Util.drawCircle(ctx, "red:", {x: 0, y: Background.DIM_Y})
    }
}

module.exports = Background