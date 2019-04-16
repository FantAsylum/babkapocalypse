export const fontDefaults = {
  button: {
    fontSize: 32,
    fontFamily: 'Arial'
  }
}

export const mainMenu = {
  button: {
    fontSize: 34,
    fontFamily: 'Arial'
  }
}

export const splashScreen = {
  text: {
    fontSize: 12,
    fontFamily: 'Arial'
  }
}

export const getFontStyle = ({fontSize: _fontSize, fontFamily: _fontFamily}) => {
  return `${_fontSize}px ${_fontFamily}`
}
