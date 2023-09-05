import global from '@standard/global'
import h from '@standard/h'
import redirectTo from './redirectTo'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer center>
      <text.A onClick={() => redirectTo.edit(global.id)} primary xxs medium>{translate.edit}</text.A>
    </stack.Footer>
  )
}

export default component
