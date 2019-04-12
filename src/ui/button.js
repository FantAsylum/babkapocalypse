import Phaser from 'phaser'
import { fontDefaults, getFontStyle } from "../globals";

export default class Button extends Phaser.GameObjects.Image {

  #upFrame
  #pressedFrame
  #hoverFrame
  #btnCallback
  #myScope

  constructor(_scene, _x, _y, _texture, { upFrame: _upFrame, pressedFrame: _pressedFrame, hoverFrame: _hoverFrame },
              _callback, { text: _text, textStyle: _textStyle }, _scale = 1) {
    super(_scene, _x, _y, _texture, _upFrame)

    this.#upFrame = _upFrame
    this.#pressedFrame = _pressedFrame
    this.#hoverFrame = _hoverFrame
    this.#btnCallback = _callback
    this.#myScope = _scene
    this.setScale(_scale)
    const textStyle = {
      font: getFontStyle(fontDefaults.button),
      wordWrap: true,
      wordWrapWidth: this.displayWidth,
      align: 'center',
      color: '#FFFFFF'
    }

    this.setInteractive()
    this.on('pointerup', this.#pointerUp, this)
    this.on('pointerdown', this.#pointerDown, this)
    this.on('pointerout', this.#pointerOut, this)
    this.#hoverFrame && this.on('pointerover', this.#pointerOver, this)

    _scene.add.existing(this)
    _text && new ButtonLabel(_scene, this.x, this.y, _text, {...textStyle, ..._textStyle})
  }

  #pointerUp(pointer) {
    this.#pressedFrame && this.setFrame(this.#upFrame)
    this.#btnCallback && this.#btnCallback.call(this.#myScope, 'up')
  }

  #pointerDown(pointer) {
    this.#pressedFrame && this.setFrame(this.#pressedFrame)
  }

  #pointerOver(pointer, x, y) {
    this.setFrame(this.#hoverFrame)
  }

  #pointerOut(pointer) {
    this.setFrame(this.#upFrame)
  }

}

class ButtonLabel extends Phaser.GameObjects.Text {
  constructor(_scene, _x, _y, _text, _textStyle) {
    super(_scene, _x, _y, _text, _textStyle)

    this.x = this.x - this.displayWidth / 2
    this.y = this.y - this.displayHeight / 2
    _scene.add.existing(this)
  }
}
