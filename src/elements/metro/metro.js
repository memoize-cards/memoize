import { paint } from '@standard/h'
import component from './component'
import event from './event'

@paint(component)
@event
class Metro {
  #id

  get id () {
    return this.#id
  }

  get offsetWidth () {
    return this[paint.rootElement]().offsetWidth + 16
  }

  constructor (props) {
    this.#id = props.id
  }

  next () {
    this[paint.rootElement]().querySelector('div').style = `transform: translateX(-${this.offsetWidth}px)`
    return this
  }

  prev () {
    this[paint.rootElement]().querySelector('div').style = `transform: translateX(${0}px)`
    return this
  }
}

export default Metro
