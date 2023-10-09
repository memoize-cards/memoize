import { params, urlFor } from '@standard/router'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer center>
      <text.A href={urlFor('deleteDeck', { id: params.id })} primary xxs medium>{translate.delete}</text.A>
    </stack.Footer>
  )
}

export default component
