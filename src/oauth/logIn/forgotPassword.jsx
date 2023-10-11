import { urlFor } from '@standard/router'
import h from '@standard/h'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A className={style.login__forgotPassword} href={urlFor('forgotPassword')} primary xxxs medium>{translate.forgotPassword}</text.A>
  )
}

export default component
