import Phaser from 'phaser'

export default class Button extends Phaser.GameObjects.Image {

  upFrame
  pressedFrame
  hoverFrame
  myCallback
  myScope

  constructor(_scene, _x, _y, _texture, _upFrame, _pressedFrame = null, _callback, _hoverFrame = null) {
    super(_scene, _x, _y, _texture, _upFrame)

    this.upFrame = _upFrame
    this.pressedFrame = _pressedFrame
    this.hoverFrame = _hoverFrame
    this.myCallback = _callback
    this.myScope = _scene

    this.setInteractive()
    this.on('pointerup', this.pointerUp, this)
    this.on('pointerdown', this.pointerDown, this)
    this.hoverFrame && this.on('pointerover', this.pointerOver, this)
    this.hoverFrame && this.on('pointerout', this.pointerOut, this)

    _scene.add.existing(this)
  }

  pointerUp(pointer) {
    this.pressedFrame && this.setFrame(this.upFrame)
    this.myCallback && this.myCallback.call(this.myScope, 'up')
  }

  pointerDown(pointer) {
    this.pressedFrame && this.setFrame(this.pressedFrame)
  }

  pointerOver(pointer, x, y) {
    this.setFrame(this.hoverFrame)
  }

  pointerOut(pointer) {
    this.setFrame(this.upFrame)
  }

}
