import { paint, repaint } from '@standard/h'
import component from '@app/deck/stats/stat'
import response from '@standard/response'
import storage from './storage'
import translate from './translate'

@paint(component)
@storage.pull
class Total {
  #value

  get label () {
    return translate.label
  }

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
