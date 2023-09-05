import { paint, repaint } from '@standard/h'
import component from './component'
import hook from '@standard/hook'
import position from './position'

@paint(component)
@hook
class Flip {
  #position

  get position () {
    return (this.#position ??= position.FRONT)
  }

  @repaint
  reveal () {
    this.#position = position.BACK
    return this
  }
}

export default Flip
