import { Scene } from 'phaser'
import playerImg from '../../assets/player.png'

export class Scene01 extends Scene {
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("player", playerImg);
  }

  create() {
    const player = this.add.image(0, 0, 'player');
  }
}
