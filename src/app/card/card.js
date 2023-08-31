import { paint, repaint } from '@standard/h'
import component from './component'
import Learn from './learn'
import queue from './queue'
import result from '@standard/result'

@paint(component)
@queue
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

  @queue.next
  again () {
    this.#target.again()
    return this
  }

  @queue.next
  easy () {
    this.#target.easy()
    return this
  }

  @queue.next
  good () {
    this.#target.good()
    return this
  }

  @queue.next
  hard () {
    this.#target.hard()
    return this
  }

  @repaint
  [result.Ok] (data) {
    this.#back = data.back
    this.#front = data.front
    this.#target = Learn.create(data)
    return this
  }
}

export default Card
