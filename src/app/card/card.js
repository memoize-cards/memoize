import * as f from '@standard/f'
import { paint, repaint } from '@standard/h'
import component from './component'
import global from './global'
import hook from '@standard/hook'
import Learn from './learn'
import queue from './queue'
import redirectTo from './redirectTo'
import Relearn from './relearn'
import Review from './review'
import result from '@standard/result'

@paint(component)
@queue
@hook
class Card {
  #back
  #front
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

  [result.Error] (_error) {
    redirectTo.back()
    return this
  }

  @repaint
  @global
  [result.Ok] (data) {
    this.#back = data.back
    this.#front = data.front
    this.#target = f.cond(
      [Review.is, Review.create],
      [Learn.is, Learn.create],
      [Relearn.is, Relearn.create]
    )(data)
    return this
  }
}

export default Card
