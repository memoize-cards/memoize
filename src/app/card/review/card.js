import * as f from '@standard/f'
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

  get type () {
    return 'Review'
  }

  constructor (id, easyFactor, interval) {
    this.#id = id
    this.#easyFactor = easyFactor
    this.#interval = interval
  }

  @storage.push
  again () {
    this.#easyFactor.dec20()
    return {
      easyFactor: this.#easyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.one,
      type: type.RELEARN
    }
  }

  @storage.push
  easy () {
    this.#easyFactor.inc15()
    this.#interval.xEFxEB()
    return {
      easyFactor: this.#easyFactor.value,
      interval: this.#interval.value
    }
  }

  @storage.push
  good () {
    this.#interval.xEF()
    return {
      easyFactor: this.#interval.value
    }
  }

  @storage.push
  hard () {
    this.#easyFactor.dec15()
    this.#interval.xHF()
    return {
      easyFactor: this.#easyFactor.value,
      interval: this.#interval.value
    }
  }

  static create (data) {
    const easyFactor = EasyFactor.create(data.easyFactor)
    const interval = Interval.create(data.interval, easyFactor)
    return new Card(data.id, easyFactor, interval)
  }

  static is (data) {
    return f.equals(data.type, type.REVIEW)
  }
}

export default Card
