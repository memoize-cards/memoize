import { paint } from '@standard/h'
import component from './component'
import echo from '@standard/echo'

@paint(component)
class Pagination {
  #id

  constructor (props) {
    this.#id = props.id
  }

  next () {
    echo.emit(`next:${this.#id}`)
    return this
  }

  prev () {
    echo.emit(`prev:${this.#id}`)
    return this
  }
}

export default Pagination
