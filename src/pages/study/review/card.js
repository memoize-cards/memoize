import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import storage from './storage'
import type from './type'

class Card {
  #id
  #easyFactor
  #lapse

  get id () {
    return this.#id
  }

  constructor (id, easyFactor, lapse) {
    this.#id = id
    this.#easyFactor = easyFactor
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
      easyFactor: EasyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.value
    }
  }

  @storage
  hard () {
    this.#easyFactor.hard()
    return {
      easyFactor: this.#easyFactor.value,
      interval: 0 /* IVL * HF */
    }
  }

  static create (data) {
    return new Card(
      data.id,
      EasyFactor.create(data.easyFactor),
      Lapse.create(data.lapse)
    )
  }
}

export default Card
