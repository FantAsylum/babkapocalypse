import Phaser from 'phaser'
import logoImg from './assets/logo.png'
import { config } from './gameConfig'

const game = new Phaser.Game({
  ...config,
  scene: {
    preload: preload,
    create: create
  }
});

function preload() {
  console.log('in')
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, 'logo');

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}
