import * as f from '@standard/f'

class Validity {
  #data = {}

  constructor (data) {
    this.#data = data
  }

  reschedule () {
    this.#data.validity = f.add(new Date().getTime(), this.#data.interval)
    return this
  }

  static create (data) {
    return new Validity(data)
  }
}

export default Validity
