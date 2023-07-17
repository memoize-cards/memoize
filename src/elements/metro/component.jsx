import h from '@standard/h'
import style from './style'

function component (_props, children) {
  return (
    <div className={style.metro}>
      <div className={style.metro__container}>
        {children}
      </div>
    </div>
  )
}

export default component
