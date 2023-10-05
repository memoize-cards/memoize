import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <div className={style.copywriter}>
      <text.Span className={style.copywriter__text} master xxxs>© {new Date().getFullYear()} Memoize</text.Span>
    </div>
  )
}

export default component
