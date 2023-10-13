import Deck from './deck'
import Interval from './interval'
import type from './type'
import User from '@app/user'
import Validity from './validity'

const payload = {
  async create (data) {
    return {
      front: data.front,
      back: data.back,
      deck: Deck.id,
      interval: Interval.oneMinute,
      type: type.LEARN,
      validity: Validity.now,
      user_id: await User.id
    }
  }
}

export default payload
