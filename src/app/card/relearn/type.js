class Type {
  #data

  static get RELEARN () {
    return 3
  }

  constructor (data) {
    this.#data = data
  }

  review () {
    this.#data.type = 2
    return this
  }

  static create (data) {
    return new Type(data)
  }
}

export default Type
