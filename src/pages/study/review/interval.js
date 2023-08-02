import * as f from '@standard/f'
import EasyBonus from './easyBonus'
import Hard from './hard'

class Interval {
  #easyFactor
  #value

  get value () {
    return this.#value
  }

  static get oneDay () {
    return f.add(new Date().getTime(), (1 * 24 * 60 * 60 * 1000))
  }

  constructor (value, easyFactor) {
    this.#easyFactor = easyFactor
    this.#value = value
  }

  easy () {
    this.#value = f.multiply(this.value, this.#easyFactor.value, EasyBonus.factor)
    return this
  }

  good () {
    this.#value = f.multiply(this.value, this.#easyFactor.value)
    return this
  }

  hard () {
    this.#value = f.multiply(this.value, Hard.factor)
    return this
  }

  static create (value, easyFactor) {
    return new Interval(value, easyFactor)
  }
}

export default Interval
