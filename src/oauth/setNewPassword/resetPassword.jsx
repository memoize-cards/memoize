import Button from '@elements/button'
import h from '@standard/h'
import style from './style'
import translate from './translate'

function component () {
  return (
    <Button className={style.setNewPassword__resetPassword} primary>{translate.resetPassword}</Button>
  )
}

export default component
