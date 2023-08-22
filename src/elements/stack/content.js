const alignments = [
  'left',
  'center',
  'right'
]

const mapper = {
  left: 'start',
  center: 'center',
  right: 'end'
}

function content (props) {
  return mapper[alignments.find((key) => props[key])] ?? mapper.left
}

export default content
