import { paint, repaint } from '@standard/h'
import component from './component'
import Learn from './learn'
import queue from './queue'
import result from '@standard/result'

@paint(component)
@queue
class Card {
  #target

  get back () {
    return this.#target?.back
  }

  get front () {
    return this.#target?.front
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
    this.#target = Learn.create(data)
    return this
  }
}

export default Card
