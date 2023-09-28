import Deck from './deck'
import Interval from './interval'

const payload = {
  create () {
    return {
      deck: Deck.id,
      interval: Interval.expired
    }
  }
}

export default payload
