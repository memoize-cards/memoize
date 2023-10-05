import h from '@standard/h'
import redirectTo from './redirectTo'
import style from './style'

function component () {
  return (
    <button className={style.linkedin} onClick={() => redirectTo.linkedin()} />
  )
}

export default component
