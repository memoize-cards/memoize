import * as f from '@standard/f'
import EasyFactor from './easyFactor'
import Interval from './interval'
import Lapse from './lapse'
import payload from './payload'
import request from '@standard/request'
import storage from './storage'
import Type from './type'
import Validity from './validity'

class Card {
  #data = {}
  #easyFactor
  #interval
  #lapse
  #type
  #validity

  get id () {
    return this.#data.id
  }

  get type () {
    return 'Relearn'
  }

  constructor (data) {
    Object.assign(this.#data, data)
    this.#easyFactor = EasyFactor.create(this.#data)
    this.#interval = Interval.create(this.#data)
    this.#lapse = Lapse.create(this.#data)
    this.#type = Type.create(this.#data)
    this.#validity = Validity.create(this.#data)
  }

  @storage.push
  again () {
    this.#lapse.incOne()
    this.#interval.temMinutes()
    this.#validity.reschedule()
    return this
  }

  @storage.push
  easy () {
    this.#easyFactor.init()
    this.#interval.fourDays()
    this.#lapse.zero()
    this.#type.review()
    this.#validity.reschedule()
    return this
  }

  @storage.push
  good () {
    this.#easyFactor.init()
    this.#interval.oneDay()
    this.#lapse.zero()
    this.#type.review()
    this.#validity.reschedule()
    return this
  }

  @storage.push
  hard () {
    this.#interval.twelveHours()
    this.#validity.reschedule()
    return this
  }

  [request.Post] () {
    return payload.create(this.#data)
  }

  static create (data) {
    return new Card(data)
  }

  static is (data) {
    return f.equals(data.type, Type.RELEARN)
  }
}

export default Card
