import * as f from '@standard/f'
import { paint, repaint } from '@standard/h'
import component from './component'
import global from './global'
import hook from '@standard/hook'
import Learn from './learn'
import payload from './payload'
import storage from './storage'
import redirectTo from './redirectTo'
import Relearn from './relearn'
import request from '@standard/request'
import Review from './review'
import result from '@standard/result'

@paint(component)
@storage
@hook
class Card {
  #data = {}
  #card

  get back () {
    return (this.#data.back ??= '')
  }

  get front () {
    return (this.#data.front ??= '')
  }

  get id () {
    return this.#card?.id
  }

  get type () {
    return this.#card?.type
  }

  @storage.pull
  async again () {
    await this.#card?.again()
    return this
  }

  @storage.pull
  async easy () {
    await this.#card?.easy()
    return this
  }

  @storage.pull
  async good () {
    await this.#card?.good()
    return this
  }

  @storage.pull
  async hard () {
    await this.#card?.hard()
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
    Object.assign(this.#data, data)
    this.#card = f.cond(
      [Review.is, Review.create],
      [Learn.is, Learn.create],
      [Relearn.is, Relearn.create]
    )(data)
    return this
  }
}

export default Card
