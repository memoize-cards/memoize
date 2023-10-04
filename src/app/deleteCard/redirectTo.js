import { urlFor } from '@standard/router'
import Deck from './deck'

const redirectTo = {
  deck () {
    location.assign(urlFor('deck', { id: Deck.id }))
    return this
  }
}

export default redirectTo
