import Edit from './edit'
import h from '@standard/h'
import HistoryBack from './historyBack'
import style from './style'

function component () {
  return (
    <header className={style.header}>
      <HistoryBack />
      <Edit />
    </header>
  )
}

export default component
