const Util = require("./util")
const Bullet = require("./bullet")
const GameView = require("./game_view")

class Spinner {
    // Need MIN_ANG_SPD = START_ANG_SPD for max speed to work properly
    static SPINNER_SIZE = 150
    static START_ANG_SPD = 3
    static SPIN_LENIENCY = 0.6
    // Game too hard to reach 40
    static MAX_ANG_SPD = 40
    static MIN_ANG_SPD = 3

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
        this.angularSpd = Spinner.START_ANG_SPD
        this.spinChecks = {'W': 'not passed', 'A': 'not passed', 'D': 'not passed'}
        this.reset = false
        this.text = ['Time W, A, and D presses to move faster.', 'Use Arrow keys to move', 'and space to shoot once moving.' ]
        this.textColor = "green"
        this.time = 60
        this.gameText = [`Time Left: 60`, `Score: 0`]
    }

    drawText(ctx) {
        // console.log('writing text')
        // console.log(`text: ${this.text[0]}`)
        // console.log(`textLoc: ${this.center.x}, ${this.center.y -150}`)
        ctx.fillStyle = `${this.textColor}`

        for (let i = 0; i < this.text.length; i++) {
            ctx.fillText(this.text[i], this.center.x, this.center.y - 150 + i * 20)
        }
    }

    draw(ctx) {
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        const restart = () => {
            alert(`Game over!\n Score: ${this.game.score} `)

            this.game.end = true
        }

        const checkTime = () => {
            if (this.time < 0) {
                restart()
            }
        }


        this.time = Math.round(60 - (Date.now() - this.game.startTime)/1000)
        
        this.gameText = [`Time Left: ${this.time}`, `Score: ${this.game.score}`]
        
        if (this.time > 10) {
            ctx.fillStyle = 'blue'
        } else {
            ctx.fillStyle = 'red'
        }
        checkTime()
        

        for (let i = 0; i < this.gameText.length; i++) {
            ctx.fillText(this.gameText[i], this.center.x, this.center.y + 150 + i * 20)
        }

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
        
        if (this.text.length > 0) {
            this.drawText(ctx)
        }
        // Possible speed so high that upcoming conditional doesn't hit. Hard code a max spin speed to prevent
        
        // console.log(this.angularSpd)
        // if it's past D but not yet at W
        if (this.rads < -4/3 * Math.PI - Spinner.SPIN_LENIENCY && this.rads > -2 * Math.PI + Spinner.SPIN_LENIENCY) {
            // and if it hasn't been checked yet
            if (this.reset === false) {
                // then check
                if (this.spinChecks['W'] === 'passed' && this.spinChecks['A'] === 'passed' && this.spinChecks['D'] === 'passed') {
                    // console.log('spin speed up!')
                    this.angularSpd += 1
                    this.text.push('Max Speed Up!')
                    this.game.background.maxSpeedUp()
                    this.textColor = 'green'
                    // Max spin speed
                    if (this.angularSpd === Spinner.MAX_ANG_SPD) {
                        this.angularSpd = Spinner.MAX_ANG_SPD
                        this.text.push('Highest Max Speed!')
                        // console.log('max spin speed reached')
                    } else if (this.angularSpd > Spinner.MAX_ANG_SPD) {
                        this.angularSpd = Spinner.MAX_ANG_SPD
                        this.text.push('Highest Max Speed!')
                        // console.log('max spin speed reached')
                        this.game.background.maxSpeedDown()
                    }
                } else {
                    this.angularSpd -= 1
                    this.text.push('Max Speed Down.')
                    this.textColor = 'red'
                    this.game.background.maxSpeedDown()
                    // console.log('Max Speed Down.')
                    if (this.angularSpd === Spinner.MIN_ANG_SPD) {
                        this.angularSpd = Spinner.MIN_ANG_SPD
                        this.text.push('At 0 Max Speed.')
                        // console.log('min spin speed reached')
                    } else if (this.angularSpd < Spinner.MIN_ANG_SPD) {
                        this.angularSpd = Spinner.MIN_ANG_SPD
                        this.text.push('At 0 Max Speed.')
                        // CHANGE to 0
                        this.game.background.maxSpeed = 5 
                        // console.log('min spin speed reached')
                    }
                }
                
                this.spinChecks['W'] = 'not passed'
                this.spinChecks['A'] = 'not passed'
                this.spinChecks['D'] = 'not passed'
                this.reset = true
            }
        } else {
            this.reset = false
        }

        if (this.rads < -2/3 * Math.PI - Spinner.SPIN_LENIENCY && this.rads > -4/3 * Math.PI - Spinner.SPIN_LENIENCY) {
            this.text = []
        }

        // Hardcode positions and offsets
        drawBGcircle(this.center.x, this.center.y - 45, ctx, checkColor('W'), 0, 2, 'W')
        drawBGcircle(this.center.x - 39, this.center.y + 22, ctx, checkColor('A'), 0, 0, 'A')
        drawBGcircle(this.center.x + 39, this.center.y + 22, ctx, checkColor('D'), 0, 0, 'D')
        

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
        // Spinner vel opposite of background movement
        const spinnerVel = {x: -1 * this.hiddenVel.x, y: -1 * this.hiddenVel.y}

        // console.log(spinnerVel)
        const norm = Util.norm(spinnerVel)
        // console.log(norm) 

        // Can't fire without moving
        // if (norm === 0) {
        //     // if (!this.text.includes('Must be moving to shoot')) {
        //     //     this.text.push('Must be moving to shoot')
        //     // } else {
        //     //     this.text.push(this.mustBeMoving)
        //     // }
        //     return
        // }

        // Can't shoot if there's already a bullet
        if (this.game.bullets.length > 0) {
            return
        }


        // x speed of bullet = sin(rads) * bulletSpeed + spinnerVelx
        const bulletVel = {x: Math.cos(this.rads - Math.PI/2) * Bullet.SPEED + spinnerVel.x, y: Math.sin(this.rads - Math.PI/2) * Bullet.SPEED + spinnerVel.y}

        const bullet = new Bullet({
            vel: bulletVel,
            rads: this.rads,
            game: this.game

            // Bullets will be removed after a certain amount of time
        })

        // console.log(bullet)
        this.game.add(bullet)
    }

    w() {
        // console.log(`rads: ${this.rads}`)
        const checkW = () => {
            if (this.spinChecks['W'] === 'not passed' &&
                    (this.rads < -2 * Math.PI + Spinner.SPIN_LENIENCY && this.rads > -2 * Math.PI) || 
                    this.rads > -1 * Spinner.SPIN_LENIENCY) 
                {
                this.spinChecks['W'] = 'passed'
                // return true
            } else {
                this.spinChecks['W'] = 'failed'
                // return false
            }
        }
        checkW()
        // console.log(this.spinChecks)
        // this.angularSpd += 1
    }
    
    a() {
        const checkA = () => {
            if (this.spinChecks['A'] === 'not passed' &&
                    (this.rads < -2/3 * Math.PI + Spinner.SPIN_LENIENCY && 
                    this.rads > -2/3 * Math.PI - Spinner.SPIN_LENIENCY)) 
                {
                this.spinChecks['A'] = 'passed'
                // return true
            } else {
                this.spinChecks['A'] = 'failed'
                // return false
            }
        }
        checkA()
        // console.log(this.spinChecks)
    }
    d() {
        const checkD = () => {   
            if (this.spinChecks['D'] === 'not passed' &&
                    (this.rads < -4/3 * Math.PI + Spinner.SPIN_LENIENCY && 
                    this.rads > -4/3 * Math.PI - Spinner.SPIN_LENIENCY)) 
                {
                this.spinChecks['D'] = 'passed'
                return true
            } else {
                this.spinChecks['D'] = 'failed'
                // return false
            }
        }
        checkD()
        // console.log(this.spinChecks)
    }
}
    
module.exports = Spinner
  