import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import component from './component'

@paint(component)
class Deck {
  #description
  #name

  get description () {
    return (this.#description ??= '')
  }

  get name () {
    return (this.#name ??= '')
  }

  @filter.prevent
  @filter.formData
  create (data) {
    this.#description = data.description
    this.#name = data.name
    return this
  }
}

export default Deck
