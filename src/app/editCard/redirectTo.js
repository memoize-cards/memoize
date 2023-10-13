import { params, urlFor } from '@standard/router'
import Deck from './deck'

const redirectTo = {
  card () {
    location.assign(urlFor('card', { id: Deck.id }))
    return this
  },

  deleteCard () {
    location.assign(urlFor('deleteCard', { deck: Deck.id, id: params.id }))
    return this
  }
}

export default redirectTo
