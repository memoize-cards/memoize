import h from '@standard/h'
import redirectTo from './redirectTo'
import style from './style'

function component () {
  return (
    <button className={style.github} onClick={() => redirectTo.github()} />
  )
}

export default component
