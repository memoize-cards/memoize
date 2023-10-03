import { paint } from '@standard/h'
import component from './component'
import redirectTo from './redirectTo'

@paint(component)
class Deck {
  #data = {}

  get description () {
    return (this.#data.description ??= '')
  }

  get name () {
    return (this.#data.name ??= '')
  }

  constructor (data) {
    Object.assign(this.#data, data)
  }

  select () {
    redirectTo.deck(this.#data.id)
    return this
  }

  static create (data) {
    return new Deck(data)
  }
}

export default Deck
