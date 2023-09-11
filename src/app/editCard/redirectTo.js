import { urlFor } from '@standard/router'
import Deck from './deck'

const redirectTo = {
  card () {
    location.assign(urlFor('card', { id: Deck.id }))
    return redirectTo
  }
}

export default redirectTo
