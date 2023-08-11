import * as filter from '@standard/filter'
import * as validator from '@standard/validator'
import { paint, repaint } from '@standard/h'
import component from './component'
import pattern from './pattern'
import result from '@standard/result'

@paint(component)
class Email {
  #validity
  #value

  get validity () {
    return (this.#validity ??= '')
  }

  get value () {
    return (this.#value ??= '')
  }

  constructor (props) {
    this.#value = props.value
  }

  @filter.value
  @validator.required
  @validator.pattern(pattern)
  onChange (value) {
    this.#value = value
    return this
  }

  @repaint
  [result.Ok] (state) {
    this.#validity = state
    return this
  }
}

export default Email
