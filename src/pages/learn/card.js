import { paint } from '@standard/h'
import Back from './back'
import component from './component'
import Front from './front'

@paint(component)
class Card {
  #back
  #front

  get back () {
    return (this.#back ??= Back.create())
  }

  get front () {
    return (this.#front ??= Front.create())
  }
}

export default Card
