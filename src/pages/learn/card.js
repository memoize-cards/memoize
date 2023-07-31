import { paint, repaint } from '@standard/h'
import component from './component'
import Deck from './deck'
import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import result from '@standard/result'
import storage from './storage'
import type from './type'

@paint(component)
@storage
class Card {
  #back
  #front
  #id

  get back () {
    return (this.#back ??= '')
  }

  get deck () {
    return Deck.id
  }

  get front () {
    return (this.#front ??= '')
  }

  get id () {
    return this.#id
  }

  again () {
    return {
      interval: Interval.temMinutes
    }
  }

  easy () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.fourDays,
      lapse: Lapse.value,
      type: type.REVIEW
    }
  }

  good () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.value,
      type: type.REVIEW
    }
  }

  hard () {
    return {
      interval: Interval.twelveHours
    }
  }

  @repaint
  [result.Ok] (data) {
    this.#back = data.back
    this.#front = data.front
    this.#id = data.id
    return this
  }
}

export default Card
