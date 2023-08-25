import h from '@standard/h'
import stack from '@elements/stack'

function component (card) {
  return (
    <stack.Div column>
      {card.front}
      {card.back}
      <button onClick={() => card.create()}>Create</button>
    </stack.Div>
  )
}

export default component
