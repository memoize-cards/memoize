import category from '@/category'
import Choose from '@directive/choose'
import h from '@standard/h'
import style from './style'
import text from '@elements/text'

function component (props) {
  return (
    <div className={style.header}>
      <Choose when={props.category}>
        <text.Span equal={category.KeepWatching} neutral m900 sm bold>Continuar assistindo</text.Span>
        <text.Span equal={category.MoreView} neutral m900 sm bold>Em alta</text.Span>
        <text.Span equal={category.MoreView} neutral m900 xxs medium>Últimos editais, trending topics, etc...</text.Span>
        <text.Span equal={category.Professor} neutral m900 sm bold>Professores</text.Span>
      </Choose>
    </div>
  )
}

export default component
