import { paint, repaint } from '@standard/h'
import component from './component'
import global from './global'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
class Deck {
  #description
  #id
  #name

  get description () {
    return (this.#description ??= '')
  }

  get id () {
    return (this.#id ??= '')
  }

  get name () {
    return (this.#name ??= '')
  }

  @repaint
  @global
  [result.Ok] (data) {
    this.#description = data.description
    this.#id = data.id
    this.#name = data.name
    return this
  }
}

export default Deck
