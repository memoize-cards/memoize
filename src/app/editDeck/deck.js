import * as filter from '@standard/filter'
import { paint, repaint } from '@standard/h'
import component from './component'
import oauth from '@app/oauth'
import redirectTo from './redirectTo'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@oauth.required
@storage.pull
class Deck {
  #data = {}

  get description () {
    return (this.#data.description ??= '')
  }

  get id () {
    return (this.#data.id ??= '')
  }

  get name () {
    return (this.#data.name ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  save (data) {
    Object.assign(this.#data, data)
    return this
  }

  @repaint
  [result.Ok] (result) {
    result.pull((data) => Object.assign(this.#data, data))
    result.push(() => redirectTo.deck(this.id))
    return this
  }
}

export default Deck
