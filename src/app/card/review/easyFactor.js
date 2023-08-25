import * as f from '@standard/f'

class EasyFactor {
  #value

  get value () {
    return (this.#value ?? 2.5)
  }

  static get #minValue () {
    return 1.3
  }

  constructor (value) {
    this.#value = value
  }

  dec20 () {
    this.#value = f
      .from(this.value)
      .pipe(f.sub(0.20))
      .pipe(f.max(EasyFactor.#minValue))
      .done()
    return this
  }

  inc15 () {
    this.#value = f
      .from(this.value)
      .pipe(f.add(0.15))
      .done()
    return this
  }

  dec15 () {
    this.#value = f
      .from(this.value)
      .pipe(f.sub(0.15))
      .pipe(f.max(EasyFactor.#minValue))
      .done()
    return this
  }

  static create (value) {
    return new EasyFactor(value)
  }
}

export default EasyFactor
