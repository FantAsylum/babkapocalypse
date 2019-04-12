import Phaser from "phaser";

export const config = {
  type: Phaser.AUTO,
  scale: {
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    parent: 'game'
  }
};
