import Deck from './deck'
import Validity from './validity'

const payload = {
  create () {
    return {
      deck: Deck.id,
      validity: Validity.expired
    }
  }
}

export default payload
