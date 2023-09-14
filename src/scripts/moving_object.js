
class MovingObject {

    // CHANGE to 4+
    static WIDTH = window.innerWidth * 1.5
    static HEIGHT = window.innerHeight * 1.5
    static SPINNER_SIZE = 150

    constructor(options) {
        console.log(`gameWidth: ${MovingObject.WIDTH}`)
        console.log(`windowWidth: ${window.innerWidth}`)
        
        // console.log(MovingObject.HEIGHT)
        this.game = options.game
        this.vel = options.vel || {x: 0, y: 0}
        this.pos = options.pos || this.game.randomPosition()
        this.rads = 0
        this.ctx = this.game.ctx
        this.isBounceable = false
        this.stop = {   right: window.innerWidth/ 2 + MovingObject.SPINNER_SIZE / 2,
                        left: window.innerWidth / 2 - MovingObject.SPINNER_SIZE / 2,
                        up: window.innerHeight / 2 - MovingObject.SPINNER_SIZE / 2,
                        down: window.innerHeight / 2 + MovingObject.SPINNER_SIZE / 2
                    }
        // this.name = 'noName'
        this.relPos = {x: MovingObject.WIDTH/2, y: MovingObject.HEIGHT/2}
        // console.log(`stopLeft: ${this.stop.left}`)
        console.log(`stopRight: ${this.stop.right}`)
    }

    move(delta) {
        console.log(MovingObject.WIDTH - this.stop.right)
        console.log(`pos: ${this.pos.x}, relPos: ${this.relPos.x}, bgroundPos: ${this.game.background.pos.x}`)
        delta = delta || 1


        
        


        // background vel is opposite direction of spinner movement
        this.relVel = {x: this.game.background.vel.x + this.vel.x, y: this.game.background.vel.y + this.vel.y}
        // console.log(`object: ${this}`)
        // console.log(`pos: ${{x: this.pos.x, y: this.pos.y}}`)
        // console.log(`vel: ${{x: this.vel.x, y: this.vel.y}}`)
        this.pos.x += this.relVel.x * delta / 40
        this.relPos = {x: this.game.background.pos.x - this.pos.x, y: this.game.background.pos.y + this.pos.y}

        
        if (this.isOobLeft(this)) {
            console.log('oobLeft')
            this.relPos.x = MovingObject.WIDTH - this.stop.left
            this.pos.x = this.game.background.pos.x - this.relPos.x
            this.vel.x *= -1
        }

        if (this.isOobRight(this)) {
            console.log('oobRight')
            // Solve oobRight check equation for relPos.x
            this.relPos.x = -1 * (this.game.background.pos.x - this.pos.x + MovingObject.SPINNER_SIZE/2 + MovingObject.WIDTH - this.stop.right)
            this.pos.x = this.relPos.x + this.game.background.pos.x + MovingObject.SPINNER_SIZE/2 + MovingObject.WIDTH - this.stop.right
            this.vel.x *= -1
        }

    }
        
    // oob if spinner pos minus target pos > game width minus stopping width
    isOobLeft(obj) {
        return this.relPos.x >= MovingObject.WIDTH - this.stop.left
    }

    // oob if 
    isOobRight(obj) {
        return this.pos.x - this.relPos.x - this.game.background.pos.x >= MovingObject.SPINNER_SIZE/2 + MovingObject.WIDTH - this.stop.right
    }


    remove(object) {
        this.game.remove(this)
    }

}

module.exports = MovingObject
  
            // const pos = this.pos           
            // console.log(`bground Y vel: ${this.game.background.vel.y}`)
            // console.log(`target y vel: ${this.vel.y}`)
            // if (this.isOobX(this.relPos)) {
            //     console.log('oobX')
                // if (this.isBounceable) {
                //     this.vel.x = -1 * this.vel.x
                // } else {
                //     this.game.remove(this)
                // }
            
            // if (this.isOobY(this.pos)) {
            //     console.log('oobY')
                // if (this.isBounceable) {
                //     this.vel.y = -1 * this.vel.y
                // } else {
                //     this.game.remove(this)
                // }
            // }
        // }