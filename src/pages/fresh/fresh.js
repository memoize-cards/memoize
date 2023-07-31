import { paint } from '@standard/h'
import Back from './back'
import component from './component'
import Front from './front'
import Interval from './interval'
import Type from './type'

@paint(component)
class Fresh {
  #back
  #front

  get back () {
    return (this.#back ??= Back.create())
  }

  get front () {
    return (this.#front ??= Front.create())
  }

  create () {
    return {
      back: this.back.value,
      front: this.front.value,
      interval: Interval.value,
      type: Type.learn
    }
  }
}

export default Fresh
