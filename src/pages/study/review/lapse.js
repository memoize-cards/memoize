import * as f from '@standard/f'

class Lepse {
  #value

  get value () {
    return (this.#value ?? 0)
  }

  constructor (value) {
    this.#value = value
  }

  again () {
    this.#value = f.inc(this.value)
    return this
  }

  static create (value) {
    return new Lepse(value)
  }
}

export default Lepse
