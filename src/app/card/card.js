import * as f from '@standard/f'
import { paint, repaint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import Deck from './deck'
import Learn from './learn'
import queue from './queue'
import position from './position'
import Relearn from './relearn'
import Review from './review'
import result from '@standard/result'

@paint(component)
@queue
class Card {
  #back
  #front
  #position
  #target

  get back () {
    return (this.#back ??= '')
  }

  get front () {
    return (this.#front ??= '')
  }

  get id () {
    return this.#target.id
  }

  get position () {
    return (this.#position ??= position.FRONT)
  }

  get type () {
    return this.#target?.type
  }

  @queue.next
  async again () {
    await this.#target.again()
    return this
  }

  @queue.next
  async easy () {
    await this.#target.easy()
    return this
  }

  edit () {
    location.assign(urlFor('editCard', { deck: Deck.id, id: this.id }))
    return this
  }

  @queue.next
  async good () {
    await this.#target.good()
    return this
  }

  @queue.next
  async hard () {
    await this.#target.hard()
    return this
  }

  @repaint
  reveal () {
    this.#position = position.BACK
    return this
  }

  [result.Error] (_error) {
    location.assign(urlFor('deck', { id: Deck.id }))
    return this
  }

  @repaint
  [result.Ok] (data) {
    this.#back = data.back
    this.#front = data.front
    this.#position = position.FRONT
    this.#target = f.cond(
      [Review.is, Review.create],
      [Learn.is, Learn.create],
      [Relearn.is, Relearn.create]
    )(data)
    return this
  }
}

export default Card
