import { urlFor } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A href={urlFor('logIn')} primary xxxs medium>{translate.logIn}</text.A>
  )
}

export default component
