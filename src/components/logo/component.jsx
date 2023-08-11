import { urlFor } from '@standard/router'
import h from '@standard/h'
import memoize from './memoize.svg'
import style from './style'

function component () {
  return (
    <img className={style.logo} src={memoize} alt='Memoize' loading='auto' onClick={() => location.assign(urlFor('home'))} />
  )
}

export default component
