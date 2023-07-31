import h from '@standard/h'
import Master from '@models/master'
import stack from '@elements/stack'

function component (card) {
  return (
    <Master>
      <stack.Div column>
        {card.front}
        {card.back}
      </stack.Div>
    </Master>
  )
}

export default component
