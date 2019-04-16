import { Scene } from 'phaser'
import splashImg from '../../assets/ladder.png'
import { splashScreen, getFontStyle } from '../globals';

export class SplashScreen extends Scene {

  #isLoading = true
  #minTimePassed = false
  #minTime = 2000

  constructor(config) {
    super(config)
  }

  preload() {
    this.load.image('splashImg', splashImg)
  }

  /*
  * Load assets for main menu
  */
  create() {
    const splashLogo = this.add.image(this.sys.game.config['width'] / 2,
      this.sys.game.config['height'] / 2, 'splashImg')

    this.load.atlas('mainMenu', 'assets/mainMenu/spritesheet.png', 'assets/mainMenu/sprites.json')
    this.load.start()

    setTimeout(() => {
      this.#minTimePassed = true
      if (!this.#isLoading) {
        splashLogo.destroy()
        this.scene.start('MainMenu')
      }
    }, this.#minTime)

    this.load.on('complete', () => {
      this.#isLoading = false
      if (this.#minTimePassed) {
        splashLogo.destroy()
        this.scene.start('MainMenu')
      }
    }, this)
  }

}
