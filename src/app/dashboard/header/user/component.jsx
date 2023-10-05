import h from '@standard/h'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component (user) {
  return (
    <div className={style.user}>
      <text.Span master xxxs>{translate.hello}</text.Span>
      <text.Span master dark sm highlight bold>{user.name}</text.Span>
    </div>
  )
}

export default component
