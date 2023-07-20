import * as f from '@standard/f'
import { paint } from '@standard/h'
import style from './style'

class Rect {
  #metro

  get deadZone () {
    return 16
  }

  get limit () {
    return f.sub(
      this.#metro[paint.rootElement]().offsetWidth,
      this.#metro[paint.rootElement]().getElementsByClassName(style.metro__container)[0].scrollWidth
    )
  }

  get width () {
    return this.#metro[paint.rootElement]().offsetWidth
  }

  constructor (metro) {
    this.#metro = metro
  }
}

export default Rect
