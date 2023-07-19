import * as f from '@standard/f'
import { paint } from '@standard/h'
import component from './component'
import event from './event'
import Rect from './rect'
import translateX from './translateX'

@paint(component)
@event
class Metro {
  #channel
  #rect = new Rect(this)
  #x

  get channel () {
    return this.#channel
  }

  get x () {
    return (this.#x ?? 0)
  }

  constructor (props) {
    this.#channel = props.channel
  }

  @translateX
  moveForward () {
    this.#x = f
      .from(this.x)
      .pipe(f.sub(this.#rect.width))
      .pipe(f.sub(this.#rect.deadZone))
      .pipe(f.max(this.#rect.limit))
      .done()
    return this
  }

  @translateX
  moveBack () {
    this.#x = f
      .from(this.x)
      .pipe(f.add(this.#rect.width))
      .pipe(f.add(this.#rect.deadZone))
      .pipe(f.min(0))
      .done()
    return this
  }
}

export default Metro
