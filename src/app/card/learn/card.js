import * as f from '@standard/f'
import EasyFactor from './easyFactor'
import Interval from './interval'
import payload from './payload'
import request from '@standard/request'
import storage from './storage'
import type from './type'

class Card {
  #data = {}

  get id () {
    return this.#data.id
  }

  get type () {
    return 'Learn'
  }

  constructor (data) {
    Object.assign(this.#data, { ...data })
  }

  @storage.push
  again () {
    Object.assign(this.#data, {
      interval: Interval.temMinutes
    })
    return this
  }

  @storage.push
  easy () {
    Object.assign(this.#data, {
      easyFactor: EasyFactor.value,
      interval: Interval.fourDays,
      type: type.REVIEW
    })
    return this
  }

  @storage.push
  good () {
    Object.assign(this.#data, {
      easyFactor: EasyFactor.value,
      interval: Interval.oneDay,
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
    return payload.create(this.#data)
  }

  static create (data) {
    return new Card(data)
  }

  static is (data) {
    return f.equals(data.type, type.LEARN)
  }
}

export default Card
