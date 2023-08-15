import { urlFor } from '@standard/router'
import h from '@standard/h'
import stack from '@elements/stack'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <stack.Footer center>
      <text.A href={urlFor('termsOfUse')} primary xxs medium>{translate.termsOfUse}</text.A>
      <text.A href={urlFor('privacyPolicy')} primary xxs medium>{translate.privacyPolicy}</text.A>
    </stack.Footer>
  )
}

export default component
