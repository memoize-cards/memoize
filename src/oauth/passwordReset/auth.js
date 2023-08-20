import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'

@paint(component)
class Auth {
  @filter.prevent
  continue () {
    location.assign(urlFor('logIn'))
    return this
  }
}

export default Auth
