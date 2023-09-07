const MovingObject = require("./moving_object")
const Util = require("./util")
const Bullet = require("./bullet")

class Spinner {
    static SPINNER_SIZE = 150
    static MIN_ANG_SPD = 5.0
    static SPIN_LENIENCY = 0.6

    constructor(options) { 
        const innerHeight = window.innerHeight
        const innerWidth = window.innerWidth

        this.game = options.game
        this.vel = {x: 0, y: 0}
        this.hiddenVel = this.game.background.vel
        this.ctx = this.game.ctx
        // console.log(this.game.background.vel)
        this.drawingPos = {x: innerWidth/2.0 - Spinner.SPINNER_SIZE/2.0, y: innerHeight/2.0 - Spinner.SPINNER_SIZE/2.0}
        this.hiddenPos = {x: innerWidth/2.0 - Spinner.SPINNER_SIZE/2.0 + this.game.background.pos.x, y: innerHeight/2.0 - Spinner.SPINNER_SIZE/2.0 + this.game.background.pos.y}        
        this.rads = 0
        this.center = {x: innerWidth/2.0, y: innerHeight/2.0}
        this.angularSpd = Spinner.MIN_ANG_SPD
        this.spinChecks = {'W': 'not passed', 'A': 'not passed', 'D': 'not passed'}
        this.reset = false
    
    }

    draw(ctx) {
        const checkColor = (spinLetter) => {
            // console.log(this.spinChecks[spinLetter])
            if (this.spinChecks[`${spinLetter}`] === 'not passed') {
                // console.log('white')
                return 'white'
            } else if (this.spinChecks[`${spinLetter}`] === 'failed') {
                return 'red'
            } else if (this.spinChecks[`${spinLetter}`] === 'passed') {
                return 'green'
            }
        } 
        // draw background circles first
        const drawBGcircle = (x, y, ctx, color, xOff, yOff, txt) => {
            ctx.fillStyle = color

            ctx.beginPath()

            ctx.arc(
            x,
            y,
            22,
            2 * Math.PI,
            false
            ) 

            ctx.font = '20px Arial'
            ctx.fillText(txt, x + xOff, y + yOff)
            ctx.strokeStyle = color
            ctx.stroke()

        }
        if (this.rads > -4/3 * Math.PI - Spinner.SPIN_LENIENCY || this.rads > -1 * Spinner.SPINNER_SIZE) {
            if (this.reset === false) {
                alert('checking time')
                this.reset = true
            } else {
                this.reset = false
            }
            //     if (this.spinChecks['W'] === 'passed' && this.spinChecks['A'] === 'passed' && this.spinChecks['D'] === 'passed') {
        //         console.log('all passed')
        //         this.angularSpd += 1
        //     } else {
        //         this.spinChecks['W'] = 'not passed'
        //         this.spinChecks['A'] = 'not passed'
        //         this.spinChecks['D'] = 'not passed'
        //     }
        }
        // Hardcode positions and offsets
        drawBGcircle(this.center.x, this.center.y - 45, ctx, checkColor('W'), -9, 8, 'W')
        drawBGcircle(this.center.x - 39, this.center.y + 22, ctx, checkColor('A'), -6, 6, 'A')
        drawBGcircle(this.center.x + 39, this.center.y + 22, ctx, checkColor('D'), -6, 6, 'D')
        

        // console.log(`angularSpd: ${this.angularSpd}`)
        ctx.save()
        ctx.translate(this.center.x, this.center.y)
        ctx.rotate(this.rads + Math.PI/64.0)
        this.rads -= this.angularSpd * Math.PI/640.0
        this.rads %= 2 * Math.PI
        ctx.translate(-1.0 * this.center.x, -1.0 * this.center.y)

        const spinnerImg = document.getElementById("spinnerImg")
        ctx.drawImage(spinnerImg, this.drawingPos.x, this.drawingPos.y, Spinner.SPINNER_SIZE, Spinner.SPINNER_SIZE)
        
        
        ctx.restore()

    }
    
    move(delta) {
        delta = delta || 1
        // console.log(`object: ${this}`)
        // console.log(`pos: ${{x: this.pos.x, y: this.pos.y}}`)
        // console.log(`vel: ${{x: this.vel.x, y: thiws.vel.y}}`)
        this.hiddenPos.x += this.hiddenVel.x * delta / 40;
        this.hiddenPos.y += this.hiddenVel.y * delta / 40;
        
        // const pos = this.pos           
        // console.log(`rads: ${this.rads}`)
    }

    fireBullet() {
        const norm = Util.norm(this.hiddenVel)
        // console.log(norm)

        if (norm === 0) {
            return
        }

        const relVel = Util.scale(Util.dir(this.hiddenVel), Bullet.SPEED)

        const bulletVel = {x: relVel.x + this.hiddenVel.x, y: relVel.y + this.hiddenVel.y}

        const bullet = new Bullet({
            vel: bulletVel,
            pos: this.drawingPos,
            game: this.game
        })

        // console.log(bullet)
        this.game.add(bullet)
    }

    w() {
        // console.log(`rads: ${this.rads}`)
        const checkW = () => {
            if ((this.rads < -2 * Math.PI + Spinner.SPIN_LENIENCY && this.rads > -2 * Math.PI) || this.rads > -1 * Spinner.SPIN_LENIENCY) {
                this.spinChecks['W'] = 'passed'
                // return true
            } else {
                this.spinChecks['W'] = 'failed'
                // return false
            }
        }
        checkW()
        console.log(this.spinChecks)
        // this.angularSpd += 1
    }
    a() {
        const checkA = () => {
            if ((this.rads < -2/3 * Math.PI + Spinner.SPIN_LENIENCY && this.rads > -2/3 * Math.PI - Spinner.SPIN_LENIENCY)) {
                this.spinChecks['A'] = 'passed'
                // return true
            } else {
                this.spinChecks['A'] = 'failed'
                // return false
            }
        }
        checkA()
        console.log(this.spinChecks)
    }
    d() {
        const checkD = () => {   
            if ((this.rads < -4/3 * Math.PI + Spinner.SPIN_LENIENCY && this.rads > -4/3 * Math.PI - Spinner.SPIN_LENIENCY)) {
                this.spinChecks['D'] = 'passed'
                return true
            } else {
                this.spinChecks['D'] = 'failed'
                // return false
            }
        }
        checkD()
        console.log(this.spinChecks)
    }
}
    
module.exports = Spinner
  