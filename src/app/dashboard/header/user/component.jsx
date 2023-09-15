import cookie from '@standard/cookie'
import h from '@standard/h'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <div className={style.user}>
      <text.Span master xxxs>{translate.hello}</text.Span>
      <text.Span master dark sm highlight bold>{cookie.name}</text.Span>
    </div>
  )
}

export default component
