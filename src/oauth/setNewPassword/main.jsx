import h from '@standard/h'
import Master from '@models/master'
import stack from '@elements/stack'
import style from './style'

function component (_props, children) {
  return (
    <Master>
      <stack.Main className={style.setNewPassword__main} column middle center giant>
        {children}
      </stack.Main>
    </Master>
  )
}

export default component
