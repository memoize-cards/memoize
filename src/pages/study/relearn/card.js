import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import storage from './storage'
import type from './type'

class Card {
  #id
  #lapse

  get id () {
    return this.#id
  }

  constructor (id, lapse) {
    this.#id = id
    this.#lapse = lapse
  }

  @storage
  again () {
    this.#lapse.again()
    return {
      interval: Interval.temMinutes,
      lapse: this.#lapse.value
    }
  }

  @storage
  easy () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.fourDays,
      lapse: Lapse.zero,
      type: type.REVIEW
    }
  }

  @storage
  good () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.zero,
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
    const { id } = data
    const lapse = Lapse.create(data.lapse)
    return new Card(id, lapse)
  }
}

export default Card
