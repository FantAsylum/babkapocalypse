import { Scene } from 'phaser'
import Button from '../ui/button'

export class MainMenu extends Scene {
  constructor(config) {
    super(config)
  }

  preload() {
    this.load.atlas('mainMenu', 'assets/mainMenu/spritesheet.png', 'assets/mainMenu/sprites.json');
  }

  create() {
    new Button(this,
      this.sys.game.config['width'] / 2,
      this.sys.game.config['height'] / 2,
      'mainMenu',
      'button',
      'button_pressed',
      this.startGame)
  }

  startGame() {
    this.scene.start('Scene01')
  }

}
