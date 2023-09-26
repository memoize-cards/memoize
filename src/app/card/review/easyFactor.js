import * as f from '@standard/f'

class EasyFactor {
  #data

  static get #minValue () {
    return 1.3
  }

  constructor (data) {
    this.#data = data
  }

  dec20 () {
    this.#data.easyFactor = f
      .from(this.#data.easyFactor)
      .pipe(f.sub(0.20))
      .pipe(f.max(EasyFactor.#minValue))
      .done()
    return this
  }

  inc15 () {
    this.#data.easyFactor = f
      .from(this.#data.easyFactor)
      .pipe(f.add(0.15))
      .done()
    return this
  }

  dec15 () {
    this.#data.easyFactor = f
      .from(this.#data.easyFactor)
      .pipe(f.sub(0.15))
      .pipe(f.max(EasyFactor.#minValue))
      .done()
    return this
  }

  static create (data) {
    return new EasyFactor(data)
  }
}

export default EasyFactor
