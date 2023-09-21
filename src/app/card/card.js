import * as f from '@standard/f'
import { paint, repaint } from '@standard/h'
import component from './component'
import global from './global'
import hook from '@standard/hook'
import Learn from './learn'
import payload from './payload'
import queue from './queue'
import redirectTo from './redirectTo'
import Relearn from './relearn'
import request from '@standard/request'
import Review from './review'
import result from '@standard/result'

@paint(component)
@queue
@hook
class Card {
  #data = {}
  #target

  get back () {
    return (this.#data.back ??= '')
  }

  get front () {
    return (this.#data.front ??= '')
  }

  get id () {
    return this.#target?.id
  }

  get type () {
    return this.#target?.type
  }

  @queue.next
  async again () {
    await this.#target?.again()
    return this
  }

  @queue.next
  async easy () {
    await this.#target?.easy()
    return this
  }

  @queue.next
  async good () {
    await this.#target?.good()
    return this
  }

  @queue.next
  async hard () {
    await this.#target?.hard()
    return this
  }

  [request.Get] () {
    return payload.create()
  }

  [result.Error] (_error) {
    redirectTo.studyCompleted()
    return this
  }

  @repaint
  @global
  [result.Ok] (data) {
    Object.assign(this.#data, { ...data })
    this.#target = f.cond(
      [Review.is, Review.create],
      [Learn.is, Learn.create],
      [Relearn.is, Relearn.create]
    )(data)
    return this
  }
}

export default Card
