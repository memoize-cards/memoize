import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import storage from './storage'
import type from './type'

class Card {
  #back
  #front
  #id

  get back () {
    return (this.#back ??= '')
  }

  get front () {
    return (this.#front ??= '')
  }

  get id () {
    return this.#id
  }

  constructor (id, back, front) {
    this.#id = id
    this.#back = back
    this.#front = front
  }

  @storage
  again () {
    return {
      interval: Interval.temMinutes
    }
  }

  @storage
  easy () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.fourDays,
      lapse: Lapse.value,
      type: type.REVIEW
    }
  }

  @storage
  good () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.value,
      type: type.REVIEW
    }
  }

  @storage
  hard () {
    return {
      interval: Interval.twelveHours
    }
  }

  static create (data) {
    return new Card(
      data.id,
      data.front,
      data.back
    )
  }
}

export default Card
