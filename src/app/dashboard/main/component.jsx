import Calendar from './calendar'
import CreateDeck from './createDeck'
import Decks from './decks'
import h from '@standard/h'
import style from './style'

function component () {
  return (
    <main className={style.main}>
      <Calendar />
      <CreateDeck />
      <Decks />
    </main>
  )
}

export default component
