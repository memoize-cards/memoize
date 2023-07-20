import category from '@components/carousel/category'
import Choose from '@directive/choose'
import h from '@standard/h'
import icon from '@elements/icon'
import style from './style'
import text from '@elements/text'

function component (props) {
  return (
    <div className={style.header}>
      <Choose when={props.category}>
        <text.Span equal={category.KeepWatching} neutral m900 sm bold>Continuar assistindo <icon.CaretRight /></text.Span>
        <text.Span equal={category.MoreView} neutral m900 sm bold><icon.TrendUp large /> Em alta <icon.CaretRight /></text.Span>
        <text.Span equal={category.MoreView} neutral m900 xxs medium>Últimos editais, trending topics, etc...</text.Span>
        <text.Span equal={category.Professor} neutral m900 sm bold>Professores <icon.CaretRight /></text.Span>
      </Choose>
    </div>
  )
}

export default component
