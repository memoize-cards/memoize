import h from '@standard/h'
import Master from '@models/master'
import stack from '@elements/stack'
import text from '@elements/text'

function component () {
  return (
    <Master>
      <stack.Div center middle>
        <text.Strong master darker md medium>Computador</text.Strong>
      </stack.Div>
    </Master>
  )
}

export default component
