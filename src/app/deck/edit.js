import { urlFor } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A href={urlFor('editDeck')} primary xxs medium>{translate.edit}</text.A>
  )
}

export default component
