import h from '@standard/h'
import stack from '@elements/stack'

function component (decks) {
  return (
    <stack.Div column xs>
      {decks.collection}
    </stack.Div>
  )
}

export default component
