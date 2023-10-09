import * as f from '@standard/f'
import EasyBonus from './easyBonus'
import HardFactor from './hardFactor'

class Interval {
  #data = {}

  static get #oneYear () {
    return (365 * 24 * 60 * 60 * 1000)
  }

  constructor (data) {
    this.#data = data
  }

  oneDay () {
    this.#data.interval = (1 * 24 * 60 * 60 * 1000)
    return this
  }

  xEFxEB () {
    this.#data.interval = f
      .from(this.#data.interval)
      .pipe(f.multiply(this.#data.easyFactor))
      .pipe(f.multiply(EasyBonus.value))
      .pipe(f.min(Interval.#oneYear))
      .done()
    return this
  }

  xEF () {
    this.#data.interval = f
      .from(this.#data.interval)
      .pipe(f.multiply(this.#data.easyFactor))
      .pipe(f.min(Interval.#oneYear))
      .done()
    return this
  }

  xHF () {
    this.#data.interval = f
      .from(this.#data.interval)
      .pipe(f.multiply(HardFactor.value))
      .pipe(f.min(Interval.#oneYear))
      .done()
    return this
  }

  static create (data) {
    return new Interval(data)
  }
}

export default Interval
