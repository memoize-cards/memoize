import { paint } from '@standard/h'
import component from './component'

@paint(component)
class Deck {
  #description
  #id
  #name

  get description () {
    return (this.#description ??= '')
  }

  get name () {
    return (this.#name ??= '')
  }

  constructor (id, name, description) {
    this.#description = description
    this.#id = id
    this.#name = name
  }

  static create (data) {
    return new Deck(
      data.id,
      data.name,
      data.description
    )
  }
}

export default Deck
