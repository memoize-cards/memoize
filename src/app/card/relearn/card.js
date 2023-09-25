import * as f from '@standard/f'
import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import request from '@standard/request'
import storage from './storage'
import type from './type'

class Card {
  #data = {}
  #lapse

  get id () {
    return this.#data.id
  }

  get type () {
    return 'Relearn'
  }

  constructor (data, lapse) {
    Object.assign(this.#data, { ...data })
    this.#lapse = lapse
  }

  @storage.push
  again () {
    this.#lapse.inc1()
    Object.assign(this.#data, {
      interval: Interval.temMinutes,
      lapse: this.#lapse.value
    })
    return this
  }

  @storage.push
  easy () {
    Object.assign(this.#data, {
      easyFactor: EasyFactor.value,
      interval: Interval.fourDays,
      lapse: Lapse.zero,
      type: type.REVIEW
    })
    return this
  }

  @storage.push
  good () {
    Object.assign(this.#data, {
      easyFactor: EasyFactor.value,
      interval: Interval.oneDay,
      lapse: Lapse.zero,
      type: type.REVIEW
    })
    return this
  }

  @storage.push
  hard () {
    Object.assign(this.#data, {
      interval: Interval.twelveHours
    })
    return this
  }

  [request.Post] () {
    return {
      easyFactor: this.#data.easyFactor,
      interval: this.#data.interval,
      lapse: this.#data.lapse,
      type: this.#data.type
    }
  }

  static create (data) {
    const lapse = Lapse.create(data.lapse)
    return new Card(data, lapse)
  }

  static is (data) {
    return f.equals(data.type, type.RELEARN)
  }
}

export default Card
