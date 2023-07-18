import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component (_props, children) {
  return (
    <div className={style.caption}>
      <text.Span neutral m900 bold xxs>{children.discipline}</text.Span>
      <text.Span neutral m700 xxs>{children.teacher}</text.Span>
    </div>
  )
}

export default component
