const alignments = [
  'top',
  'middle',
  'bottom'
]

const mapper = {
  top: 'start',
  middle: 'center',
  bottom: 'end'
}

function align (props) {
  return mapper[alignments.find((key) => props[key])] ?? mapper.top
}

export default align
