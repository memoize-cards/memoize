import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import component from './component'

@paint(component)
class Back {
  #value

  get validity () {
    return Boolean(this.value)
  }

  get value () {
    return (this.#value ??= '')
  }

  @filter.textContent
  change (value) {
    this.#value = value
    return this
  }

  static create () {
    return new Back()
  }
}

export default Back
