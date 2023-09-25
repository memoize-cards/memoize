import * as f from '@standard/f'
import EasyFactor from './easyFactor'
import Interval from './interval'
import payload from './payload'
import request from '@standard/request'
import storage from './storage'
import Type from './type'

class Card {
  #data = {}
  #easyFactor
  #interval
  #type

  get id () {
    return this.#data.id
  }

  get type () {
    return 'Learn'
  }

  constructor (data) {
    Object.assign(this.#data, data)
    this.#easyFactor = EasyFactor.create(this.#data)
    this.#interval = Interval.create(this.#data)
    this.#type = Type.create(this.#data)
  }

  @storage.push
  again () {
    this.#interval.temMinutes()
    return this
  }

  @storage.push
  easy () {
    this.#easyFactor.init()
    this.#interval.fourDays()
    this.#type.review()
    return this
  }

  @storage.push
  good () {
    this.#easyFactor.init()
    this.#interval.oneDay()
    this.#type.review()
    return this
  }

  @storage.push
  hard () {
    this.#interval.twelveHours()
    return this
  }

  [request.Post] () {
    return payload.create(this.#data)
  }

  static create (data) {
    return new Card(data)
  }

  static is (data) {
    return f.equals(data.type, Type.LEARN)
  }
}

export default Card
