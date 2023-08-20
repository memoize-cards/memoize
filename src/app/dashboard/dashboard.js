import { paint } from '@standard/h'
import component from './component'
import cookie from '@standard/cookie'

@paint(component)
class Dashboard {
  #name

  get name () {
    return (this.#name ??= cookie.name)
  }
}

export default Dashboard
