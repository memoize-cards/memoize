import { urlFor } from '@standard/router'
import h from '@standard/h'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A href={urlFor('termsOfUse')} primary xxxs>{translate.termsOfUse}</text.A>
  )
}

export default component
