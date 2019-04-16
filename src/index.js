import Phaser from 'phaser'
import { config } from './gameConfig'
import {
  Scene01,
  MainMenu,
  SplashScreen
} from './scenes';

window.onload = function () {
  const game = new Phaser.Game(config)

  game.scene.add('SplashScreen', SplashScreen)
  game.scene.add('MainMenu', MainMenu)
  game.scene.add('Scene01', Scene01)

  game.scene.start('SplashScreen')
}

