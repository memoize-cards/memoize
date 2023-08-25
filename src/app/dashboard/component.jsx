import Calendar from './calendar'
import Decks from './decks'
import Footer from './footer'
import h from '@standard/h'
import Main from '@elements/main'
import User from './user'

function component () {
  return (
    <Main>
      <User />
      <Calendar />
      <Decks />
      <Footer />
    </Main>
  )
}

export default component
