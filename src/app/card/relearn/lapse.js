import * as f from '@standard/f'

class Lapse {
  #value

  get value () {
    return (this.#value ??= 1)
  }

  static get zero () {
    return 0
  }

  constructor (value) {
    return this.#value = value
  }

  inc1 () {
    this.#value = f.inc(this.value)
    return this
  }

  static create (value) {
    return new Lapse(value)
  }
}

export default Lapse
