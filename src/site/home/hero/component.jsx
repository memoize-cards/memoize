import Description from './description'
import h from '@standard/h'
import Install from './install'
import stack from '@elements/stack'
import style from './style'
import Title from './title'

function component () {
  return (
    <div className={style.hero}>
      <stack.HGroup column nano>
        <Title />
        <Description />
      </stack.HGroup>
      <Install />
    </div>
  )
}

export default component
