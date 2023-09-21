import Deck from './deck'
import Interval from './interval'
import type from './type'
import User from './user'

const payload = {
  create (card) {
    return {
      front: card.front,
      back: card.back,
      deck: Deck.id,
      interval: Interval.oneMinute,
      type: type.LEARN,
      user_id: User.id
    }
  }
}

export default payload
