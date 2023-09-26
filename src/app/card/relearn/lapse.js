import * as f from '@standard/f'

class Lapse {
  #data

  constructor (data) {
    this.#data = data
  }

  incOne () {
    this.#data.lapse = f.inc(this.#data.lapse)
    return this
  }

  zero () {
    this.#data.lapse = 0
    return this
  }

  static create (data) {
    return new Lapse(data)
  }
}

export default Lapse
