import h from '@standard/h'
import style from './style'
import text from '@elements/text'
import translate from './translate'

function component () {
  return (
    <text.Span className={style.footer__benefit} master xxxs>{translate.usage}</text.Span>
  )
}

export default component
