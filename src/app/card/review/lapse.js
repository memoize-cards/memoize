class Lapse {
  #data

  constructor (data) {
    this.#data = data
  }

  one () {
    this.#data.lapse = 1
    return this
  }

  static create (data) {
    return new Lapse(data)
  }
}

export default Lapse
