import Calendar from './calendar'
import CreateDeck from './createDeck'
import Decks from './decks'
import h from '@standard/h'
import Main from './main'
import User from './user'

function component () {
  return (
    <Main>
      <User />
      <Calendar />
      <CreateDeck />
      <Decks />
    </Main>
  )
}

export default component
