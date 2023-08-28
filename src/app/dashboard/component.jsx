import Calendar from './calendar'
import CreateDeck from './createDeck'
import Decks from './decks'
import Footer from './footer'
import h from '@standard/h'
import Main from './main'
import User from './user'

function component () {
  return (
    <Main>
      <User />
      <Calendar />
      <Decks />
      <CreateDeck />
      <Footer />
    </Main>
  )
}

export default component
