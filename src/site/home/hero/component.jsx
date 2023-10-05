import Description from './description'
import h from '@standard/h'
import Install from './install'
import media from './media.svg'
import stack from '@elements/stack'
import style from './style'
import Title from './title'

function component () {
  return (
    <div className={style.hero}>
      <img className={style.hero__illustration} src={media} />
      <stack.HGroup className={style.hero__hgroup} column nano>
        <Title />
        <Description />
      </stack.HGroup>
      <Install />
    </div>
  )
}

export default component
