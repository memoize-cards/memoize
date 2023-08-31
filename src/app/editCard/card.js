import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import Deck from './deck'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
class Card {
  #back
  #front
  #id

  get back () {
    return (this.#back ??= '')
  }

  get front () {
    return (this.#front ??= '')
  }

  get id () {
    return (this.#id ??= '')
  }

  constructor (id, front, back) {
    this.#back = back
    this.#front = front
    this.#id = id
  }

  @filter.prevent
  @filter.formData
  @storage.push
  save (data) {
    this.#back = data.back
    this.#front = data.front
    return this
  }

  [result.Error] (_error) {
    return this
  }

  [result.Ok] (_card) {
    location.assign(urlFor('deck', { id: Deck.id }))
    return this
  }
}

export default Card
