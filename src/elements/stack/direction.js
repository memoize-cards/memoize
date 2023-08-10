const directions = [
  'row',
  'column'
]

function direction (props) {
  return directions.find((key) => props[key]) ?? 'row'
}

export default direction
