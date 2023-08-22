import h from '@standard/h'
import style from './style'

function component (props) {
  return (
    <div {...props} className={style.avatar} />
  )
}

export default component
