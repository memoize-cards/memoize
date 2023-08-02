import * as f from '@standard/f'
import Hard from './hard'

class Interval {
  #value

  get value () {
    return this.#value
  }

  static get oneDay () {
    return f.add(new Date().getTime(), (1 * 24 * 60 * 60 * 1000))
  }

  constructor (value) {
    this.#value = value
  }

  hard () {
    this.#value = f.multiply(this.value, Hard.factor)
    return this
  }

  static create (value) {
    return new Interval(value)
  }
}

export default Interval
