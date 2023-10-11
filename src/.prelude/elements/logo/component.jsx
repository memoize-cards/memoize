import h from '@standard/h'
import memoize from './memoize.svg'
import redirectTo from './redirectTo'
import style from './style'

function component (props) {
  return (
    <img {...props} className={style.logo} src={memoize} alt='Memoize' loading='auto' onClick={() => redirectTo.home()} />
  )
}

export default component
