import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import storage from './storage'
import type from './type'

class Card {
  #id
  #easyFactor
  #interval

  get id () {
    return this.#id
  }

  constructor (id, easyFactor, interval) {
    this.#id = id
    this.#easyFactor = easyFactor
    this.#interval = interval
  }

  @storage
  again () {
    this.#easyFactor.again()
    return {
      easyFactor: this.#easyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.one,
      type: type.RELEARN
    }
  }

  @storage
  easy () {
    this.#easyFactor.easy()
    this.#interval.easy()
    return {
      easyFactor: this.#easyFactor.value,
      interval: this.#nterval.value
    }
  }

  @storage
  good () {
    this.#interval.good()
    return {
      easyFactor: this.#interval.value
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
    const { id } = data
    const easyFactor = EasyFactor.create(data.easyFactor)
    const interval = Interval.create(data.interval, easyFactor)
    return new Card(id, easyFactor, interval)
  }
}

export default Card
