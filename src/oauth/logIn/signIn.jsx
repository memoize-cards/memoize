import Button from '@elements/button'
import h from '@standard/h'
import style from './style'
import translate from './translate'

function component () {
  return (
    <Button className={style.login__signIn} primary>{translate.signIn}</Button>
  )
}

export default component