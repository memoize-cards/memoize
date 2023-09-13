import { urlFor } from '@standard/router'
import Deck from './deck'
import global from '@standard/global'

const redirectTo = {
  edit () {
    location.assign(urlFor('editCard', { deck: Deck.id, id: global.id }))
    return this
  }
}

export default redirectTo
