import * as f from '@standard/f'
import EasyFactor from './easyFactor'
import Interval from './interval'
import storage from './storage'
import type from './type'

class Card {
  #id

  get id () {
    return this.#id
  }

  constructor (id) {
    this.#id = id
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
      type: type.REVIEW
    }
  }

  @storage
  good () {
    return {
      easyFactor: EasyFactor.value,
      interval: Interval.oneDay,
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
    return new Card(data.id)
  }

  static is (data) {
    return f.equals(data.type, type.LEARN)
  }
}

export default Card
