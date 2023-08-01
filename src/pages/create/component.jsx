import h from '@standard/h'
import Master from '@models/master'
import stack from '@elements/stack'

function component (card) {
  return (
    <Master>
      <stack.Div column>
        {card.front}
        {card.back}
        <button onClick={() => card.create()}>Create</button>
      </stack.Div>
    </Master>
  )
}

export default component
