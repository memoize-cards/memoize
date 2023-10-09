import CreateDeck from './createDeck'
import Decks from './decks'
import h from '@standard/h'
import Main from './main'
import Master from '@app/master'

function component () {
  return (
    <Master>
      <Main>
        <CreateDeck />
        <Decks />
      </Main>
    </Master>
  )
}

export default component
