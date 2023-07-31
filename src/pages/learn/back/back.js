import { paint } from '@standard/h'
import component from './component'

@paint(component)
class Back {
  #value

  get value () {
    return (this.#value ??= '')
  }

  static create () {
    return new Back()
  }
}

export default Back
