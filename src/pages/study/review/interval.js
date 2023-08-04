import * as f from '@standard/f'
import EasyBonus from './easyBonus'
import HardFactor from './hardFactor'

class Interval {
  #easyFactor
  #value

  get value () {
    return this.#value
  }

  static get oneDay () {
    return f.add(new Date().getTime(), (1 * 24 * 60 * 60 * 1000))
  }

  static get #oneYear () {
    return f.add(new Date().getTime(), (365 * 24 * 60 * 60 * 1000))
  }

  constructor (value, easyFactor) {
    this.#easyFactor = easyFactor
    this.#value = value
  }

  xEFxEB () {
    this.#value = f
      .from(this.value)
      .pipe(f.multiply(this.#easyFactor.value))
      .pipe(f.multiply(EasyBonus.value))
      .pipe(f.min(Interval.#oneYear))
      .done()
    return this
  }

  xEF () {
    this.#value = f
      .from(this.value)
      .pipe(f.multiply(this.#easyFactor.value))
      .pipe(f.min(Interval.#oneYear))
      .done()
    return this
  }

  xHF () {
    this.#value = f
      .from(this.value)
      .pipe(f.multiply(HardFactor.value))
      .pipe(f.min(Interval.#oneYear))
      .done()
    return this
  }

  static create (value, easyFactor) {
    return new Interval(value, easyFactor)
  }
}

export default Interval
