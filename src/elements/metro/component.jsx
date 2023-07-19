import h from '@standard/h'
import style from './style'

function component (_props, children) {
  return (
    <div className={style.metro} data-metro>
      <div className={style.metro__container} data-metro-container>
        {children}
      </div>
    </div>
  )
}

export default component
