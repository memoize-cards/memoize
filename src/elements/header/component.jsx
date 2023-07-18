import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component () {
  return (
    <div className={style.header}>
      <text.Span neutral m900 sm bold>Em alta</text.Span>
      <text.Span neutral m900 xxs medium>Últimos editais, trending topics, etc...</text.Span>
    </div>
  )
}

export default component
