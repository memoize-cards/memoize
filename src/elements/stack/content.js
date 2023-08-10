const contents = [
  'start',
  'center',
  'end'
]

function content (props) {
  return contents.find((key) => props[key]) ?? 'start'
}

export default content
