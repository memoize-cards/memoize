import { urlFor } from '@standard/router'
import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <text.A className={style.backToLogIn} master dark xxs medium href={urlFor('logIn')}>Back to log in</text.A>
  )
}

export default component
