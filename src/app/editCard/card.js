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
class Card {
  #data = {}

  get back () {
    return (this.#data.back ??= '')
  }

  get front () {
    return (this.#data.front ??= '')
  }

  get id () {
    return (this.#data.id ??= '')
  }

  @filter.prevent
  @filter.formData
  @storage.push
  save (data) {
    Object.assign(this.#data, data)
    return this
  }

  [result.Error] (_error) {
    return this
  }

  @repaint
  [result.Ok] (result) {
    result.pull((data) => Object.assign(this.#data, data))
    result.push(() => redirectTo.card())
    return this
  }
}

export default Card
