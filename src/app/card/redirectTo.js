import { urlFor } from '@standard/router'
import Deck from './deck'

const redirectTo = {
  back () {
    location.assign(urlFor('deck', { id: Deck.id }))
    return this
  },

  edit (id) {
    location.assign(urlFor('editCard', { deck: Deck.id, id }))
    return this
  }
}

export default redirectTo
