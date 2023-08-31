import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import Deck from './deck'
import Interval from './interval'
import result from '@standard/result'
import storage from './storage'
import type from './type'

@paint(component)
class Card {
  #back
  #front

  get back () {
    return (this.#back ??= '')
  }

  get deck () {
    return Deck.id
  }

  get front () {
    return (this.#front ??= '')
  }

  get interval () {
    return Interval.oneMinute
  }

  get type () {
    return type.LEARN
  }

  @filter.prevent
  @filter.formData
  @storage.push
  create (data) {
    this.#back = data.back
    this.#front = data.front
    return this
  }

  [result.Error] (_error) {
    return this
  }

  [result.Ok] (_deck) {
    location.assign(urlFor('deck', { id: this.deck }))
    return this
  }
}

export default Card
