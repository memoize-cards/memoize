import { paint } from '@standard/h'
import component from './component'
import event from './event'
import resize from './resize'

@paint(component)
@event
@resize
class Metro {
  #id
  #x

  get id () {
    return this.#id
  }

  get x () {
    return (this.#x ?? 0)
  }

  get #xLimit () {
    const offsetWidth = this[paint.rootElement]().offsetWidth
    const scrollWidth = this[paint.rootElement]().querySelector('div').scrollWidth
    return (offsetWidth - scrollWidth)
  }

  get #xWidth () {
    return this[paint.rootElement]().offsetWidth
  }

  constructor (props) {
    this.#id = props.id
  }

  next () {
    this.#x = Math.max(this.x - this.#xWidth - 16, this.#xLimit)
    this[paint.rootElement]().querySelector('div').style = `transform: translateX(${this.#x}px)`
    return this
  }

  prev () {
    this.#x = Math.min(this.x + this.#xWidth + 16, 0)
    this[paint.rootElement]().querySelector('div').style = `transform: translateX(${this.#x}px)`
    return this
  }

  rewind () {
    this.#x = 0
    this[paint.rootElement]().querySelector('div').style = `transform: translateX(${0}px)`
    return this
  }
}

export default Metro
