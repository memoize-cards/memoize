import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
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

  select () {
    location.assign(urlFor('deck', { id: this.#id }))
    return this
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
