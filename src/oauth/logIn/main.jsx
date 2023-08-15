import h from '@standard/h'
import stack from '@elements/stack'
import style from './style'

function component (_props, children) {
  return (
    <stack.Main className={style.login__main} column middle center giant>
      {children}
    </stack.Main>
  )
}

export default component
