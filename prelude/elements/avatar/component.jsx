import fallback from './fallback.svg'
import h from '@standard/h'
import style from './style'

function component (props) {
  return (
    <img {...props} className={style.avatar} onError={(e) => e.target.src = fallback} />
  )
}

export default component
