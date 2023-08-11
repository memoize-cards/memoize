import Button from '@elements/button'
import h from '@standard/h'
import style from './style'
import translate from './translate'

function component () {
  return (
    <Button className={style.checkYourEmail__openEmailApp} primary>{translate.openEmailApp}</Button>
  )
}

export default component
