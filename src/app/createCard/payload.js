import Deck from './deck'
import Interval from './interval'
import type from './type'
import User from './user'

const payload = {
  async create (data) {
    return {
      front: data.front,
      back: data.back,
      deck: Deck.id,
      interval: Interval.oneMinute,
      type: type.LEARN,
      user_id: await User.id
    }
  }
}

export default payload
