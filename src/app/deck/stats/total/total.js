import { paint, repaint } from '@standard/h'
import component from './component'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@storage.pull
class Total {
  #value

  get value () {
    return String(this.#value ??= 0)
  }

  @repaint
  [response.Ok] (count) {
    this.#value = count
    return this
  }
}

export default Total
