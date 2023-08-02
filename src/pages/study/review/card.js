import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import storage from './storage'
import type from './type'

class Card {
  #id
  #easyFactor
  #interval
  #lapse

  get id () {
    return this.#id
  }

  constructor (id, easyFactor, interval, lapse) {
    this.#id = id
    this.#easyFactor = easyFactor
    this.#interval = interval
    this.#lapse = lapse
  }

  @storage
  again () {
    this.#easyFactor.again()
    this.#lapse.again()
    return {
      easyFactor: this.#easyFactor.value,
      interval: Interval.oneDay,
      lapse: this.#lapse.value,
      type: type.RELEARN
    }
  }

  @storage
  easy () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.fourDays,
      lapse: Lapse.value
    }
  }

  @storage
  good () {
    return {
      interval: 0 /* IVL * EF */
    }
  }

  @storage
  hard () {
    this.#easyFactor.hard()
    this.#interval.hard()
    return {
      easyFactor: this.#easyFactor.value,
      interval: this.#interval.value
    }
  }

  static create (data) {
    return new Card(
      data.id,
      EasyFactor.create(data.easyFactor),
      Interval.create(data.interval),
      Lapse.create(data.lapse)
    )
  }
}

export default Card
