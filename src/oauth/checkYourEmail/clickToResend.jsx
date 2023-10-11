import { urlFor } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A href={urlFor('forgotPassword')} primary xxxs medium>{translate.clickToResend}</text.A>
  )
}

export default component
