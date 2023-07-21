import colors from './colors'

function theme (value) {
  return colors[value.length % colors.length]
}

export default theme
