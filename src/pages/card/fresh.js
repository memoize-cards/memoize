import { paint } from '@standard/h'
import component from './component'

@paint(component)
class Fresh {
  #back
  #front

  get back () {
    return (this.#back ??= '')
  }

  get front () {
    return (this.#front ??= '')
  }
}

export default Fresh
