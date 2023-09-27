import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import redirectTo from './redirectTo'
import result from '@standard/result'
import storage from './storage'

@paint(component)
class Deck {
  #data = {}

  get description () {
    return (this.#data.description ??= '')
  }

  get name () {
    return (this.#data.name ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  create (data) {
    Object.assign(this.#data, data)
    return this
  }

  [result.Error] (_error) {
    return this
  }

  [result.Ok] (data) {
    redirectTo.deck(data.id)
    return this
  }
}

export default Deck
