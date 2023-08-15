import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'

function component (card) {
  return (
    <stack.Div column>
      <text.Div master dark md medium>{card.front}</text.Div>
      <text.Div master dark md medium>{card.back}</text.Div>
    </stack.Div>
  )
}

export default component
