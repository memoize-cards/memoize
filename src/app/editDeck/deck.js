import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
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
  @storage.push
  save (data) {
    this.#description = data.description
    this.#name = data.name
    return this
  }

  @repaint
  [result.Ok] (data) {
    location.assign(urlFor('deck', { id: data.id }))
    return this
  }
}

export default Deck
