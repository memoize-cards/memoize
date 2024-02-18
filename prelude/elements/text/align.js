const modifiers = [
  'left',
  'center',
  'right',
  'justify'
]

function align (props) {
  return modifiers.find((modifier) => props[modifier]) ?? 'inherit'
}

export default align
