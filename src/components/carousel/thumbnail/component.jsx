import Divisor from '@components/carousel/divisor'
import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component (_props, children) {
  return (
    <div className={style.thumbnail}>
      <div className={style.thumbnail__poster}>
        <text.Span white bold xs highlight>{children.discipline}</text.Span>
        <Divisor />
        <text.Span white medium xxxs highlight>Prof. {children.teacher}</text.Span>
      </div>
    </div>
  )
}

export default component
