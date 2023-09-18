

class GameView {

    constructor(game, ctx) {
        this.game = game
        this.ctx = ctx
        this.spinner = this.game.addSpinner()
        this.highScore = 0
    }

    start() {
        this.bindKeyHandlers()
        this.lastTime = 0
        requestAnimationFrame(this.animate.bind(this))
    }

    bindKeyHandlers() {
        const spinner = this.spinner
        const game = this.game

        key('space', () => spinner.fireBullet())
        key('up', () => game.up())
        key('down', () => game.down())
        key('left', () => game.left())
        key('right', () => game.right())
        key('w', () => spinner.w())
        key('a', () => spinner.a())
        key('d', () => spinner.d())
        
        // for testing
        // key('t', () => game.t())
    }

    animate(currTime) {
        const timeDelta = currTime - this.lastTime

        this.game.step(timeDelta)
        this.game.draw(this.ctx)
        this.lastTime = currTime

        if (!this.game.end) {
            requestAnimationFrame(this.animate.bind(this))
        } else {
            this.highScore = Math.max(this.game.score, this.highScore)
            this.game = new Game(this.ctx)
            this.spinner = this.game.addSpinner()
            this.start()
        }
    }
}

module.exports = GameView;