import { urlFor } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A href={urlFor('privacyPolicy')} primary xxs medium>{translate.privacyPolicy}</text.A>
  )
}

export default component
