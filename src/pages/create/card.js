import { paint } from '@standard/h'
import Back from './back'
import component from './component'
import Deck from './deck'
import Front from './front'
import Interval from './interval'
import storage from './storage'
import type from './type'

@paint(component)
class Fresh {
  #back
  #front

  get back () {
    return (this.#back ??= Back.create())
  }

  get front () {
    return (this.#front ??= Front.create())
  }

  @storage
  create () {
    return {
      deck: Deck.id,
      front: this.front.value,
      back: this.back.value,
      interval: Interval.oneMinute,
      type: type.LEARN
    }
  }
}

export default Fresh
