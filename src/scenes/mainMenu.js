import { Scene } from 'phaser'
import Button from '../ui/button'
import { mainMenu, getFontStyle } from '../globals';

export class MainMenu extends Scene {
  constructor(config) {
    super(config)
  }

  preload() {
    this.load.atlas('mainMenu', 'assets/mainMenu/spritesheet.png', 'assets/mainMenu/sprites.json');
  }

  create() {
    const btn = new Button(this,
      this.sys.game.config['width'] / 2,
      this.sys.game.config['height'] / 2,
      'mainMenu', {
        upFrame: 'button',
        pressedFrame: 'button_pressed'
      }, this.startGame, {
        text: 'START',
        textStyle: {
          font: getFontStyle(mainMenu.button)
        }
      }, 4)
  }

  startGame() {
    this.scene.start('Scene01')
  }

}
