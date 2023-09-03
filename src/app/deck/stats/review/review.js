import { paint, repaint } from '@standard/h'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
class Review {
  #value

  get value () {
    return String(this.#value ??= 0)
  }

  @repaint
  [result.Ok] (count) {
    this.#value = count
    return this
  }
}

export default Review
