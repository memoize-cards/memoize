import h from '@standard/h'
import Master from '@models/master'
import stack from '@elements/stack'

function component (fresh) {
  return (
    <Master>
      <stack.Div column>
        {fresh.front}
        {fresh.back}
        <button onClic={() => fresh.create()}>Create</button>
      </stack.Div>
    </Master>
  )
}

export default component
