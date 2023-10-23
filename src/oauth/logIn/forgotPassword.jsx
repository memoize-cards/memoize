import h from '@standard/h'
import redirectTo from './redirectTo'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.A className={style.login__forgotPassword} onClick={() => redirectTo.forgotPassword()} href='#' primary xxxs medium>{translate.forgotPassword}</text.A>
  )
}

export default component
