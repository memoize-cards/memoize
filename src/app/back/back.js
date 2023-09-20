import * as filter from '@standard/filter'
import * as validator from '@standard/validator'
import { paint, repaint } from '@standard/h'
import component from './component'
import result from '@standard/result'

@paint(component)
class Back {
  #data = {}

  get validity () {
    return (this.#data.validity ??= '')
  }

  get value () {
    return (this.#data.value ??= '')
  }

  constructor (props) {
    Object.assign(this.#data, { ...props })
  }

  @filter.value
  @validator.required
  onChange (value) {
    Object.assign(this.#data, { value })
    return this
  }

  @repaint
  [result.Ok] (validity) {
    Object.assign(this.#data, { validity })
    return this
  }
}

export default Back
