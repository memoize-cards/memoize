import { urlFor } from '@standard/router'
import Button from '@elements/button'
import h from '@standard/h'
import style from './style'
import translate from './translate'

function component () {
  return (
    <Button className={style.home__getStarted} onClick={() => location.assign(urlFor('logIn'))} primary>{translate.getStarted}</Button>
  )
}

export default component
