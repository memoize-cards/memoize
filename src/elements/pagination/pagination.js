import { paint } from '@standard/h'
import component from './component'
import echo from '@standard/echo'

@paint(component)
class Pagination {
  #channel

  constructor (props) {
    this.#channel = props.channel
  }

  next () {
    echo.emit(`next:${this.#channel}`)
    return this
  }

  prev () {
    echo.emit(`prev:${this.#channel}`)
    return this
  }
}

export default Pagination
