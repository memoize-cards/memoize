import h from '@standard/h'
import Master from '@app/master'
import text from '@elements/text'

function component (card) {
  return (
    <Master>
      <text.Div master dark md medium>{card.front}</text.Div>
      <text.Div master dark md medium>{card.back}</text.Div>
    </Master>
  )
}

export default component
