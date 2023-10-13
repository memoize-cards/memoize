import h from '@standard/h'
import redirectTo from './redirectTo'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer center>
      <text.A onClick={() => redirectTo.deleteDeck()} href='#' primary xxs medium>{translate.delete}</text.A>
    </stack.Footer>
  )
}

export default component
