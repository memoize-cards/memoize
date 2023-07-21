import h from '@standard/h'
import style from './style'

function component (props) {
  return (
    <img className={style.thumbnail__avatar} src={props.src} onError={(e) => e.target.remove()} slot='avatar' loading='lazy' />
  )
}

export default component
