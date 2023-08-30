import { params, urlFor } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A href={urlFor('deleteDeck', { id: params.id })} primary xxs medium>{translate.delete}</text.A>
  )
}

export default component
