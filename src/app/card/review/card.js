import * as f from '@standard/f'
import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import payload from './payload'
import request from '@standard/request'
import storage from './storage'
import type from './type'

class Card {
  #data = {}
  #easyFactor
  #interval

  get id () {
    return this.#data.id
  }

  get type () {
    return 'Review'
  }

  constructor (data, easyFactor, interval) {
    Object.assign(this.#data, { ...data })
    this.#easyFactor = easyFactor
    this.#interval = interval
  }

  @storage.push
  again () {
    this.#easyFactor.dec20()
    Object.assign(this.#data, {
      easyFactor: this.#easyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.one,
      type: type.RELEARN
    })
    return this
  }

  @storage.push
  easy () {
    this.#easyFactor.inc15()
    this.#interval.xEFxEB()
    Object.assign(this.#data, {
      easyFactor: this.#easyFactor.value,
      interval: this.#interval.value
    })
    return this
  }

  @storage.push
  good () {
    this.#interval.xEF()
    Object.assign(this.#data, {
      interval: this.#interval.value
    })
    return this
  }

  @storage.push
  hard () {
    this.#easyFactor.dec15()
    this.#interval.xHF()
    Object.assign(this.#data, {
      easyFactor: this.#easyFactor.value,
      interval: this.#interval.value
    })
    return this
  }

  [request.Post] () {
    return payload.create(this.#data)
  }

  static create (data) {
    const easyFactor = EasyFactor.create(data.easyFactor)
    const interval = Interval.create(data.interval, easyFactor)
    return new Card(data, easyFactor, interval)
  }

  static is (data) {
    return f.equals(data.type, type.REVIEW)
  }
}

export default Card
