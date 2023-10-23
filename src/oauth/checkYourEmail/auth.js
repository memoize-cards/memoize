import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import component from './component'
import redirectTo from './redirectTo'

@paint(component)
class Auth {
  @filter.prevent
  openEmailApp () {
    redirectTo.provider()
    return this
  }
}

export default Auth
