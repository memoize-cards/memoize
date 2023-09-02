import { paint, repaint } from '@standard/h'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
class Deck {
  #description
  #name

  get description () {
    return (this.#description ??= '')
  }

  get name () {
    return (this.#name ??= '')
  }

  @repaint
  [result.Ok] (data) {
    this.#description = data.description
    this.#name = data.name
    return this
  }
}

export default Deck
