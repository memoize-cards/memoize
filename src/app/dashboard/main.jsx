import h from '@standard/h'
import stack from '@elements/stack'
import style from './style'

function component (_props, children) {
  return (
    <stack.Main className={style.dashboard__main} column giant>
      {children}
    </stack.Main>
  )
}

export default component
