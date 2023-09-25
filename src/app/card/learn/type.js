class Type {
  #data

  static get LEARN () {
    return 1
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
