import * as f from '@standard/f'

class EasyFactor {
  #value

  get value () {
    return (this.#value ?? 2.5)
  }

  constructor (value) {
    this.#value = value
  }

  again () {
    this.#value = f.sub(this.value, 0.20)
    return this
  }

  hard () {
    this.#value = f.sub(this.value, 0.15)
    return this
  }

  static create (value) {
    return new EasyFactor(value)
  }
}

export default EasyFactor
