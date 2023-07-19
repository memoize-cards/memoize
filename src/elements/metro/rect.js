import * as f from '@standard/f'
import { paint } from '@standard/h'

class Rect {
  #metro

  get deadZone () {
    return this.#metro[paint.rootElement]().getClientRects()[0].x * 2
  }

  get limit () {
    return f.sub(
      this.#metro[paint.rootElement]().offsetWidth,
      this.#metro[paint.rootElement]().querySelector('div').scrollWidth
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
