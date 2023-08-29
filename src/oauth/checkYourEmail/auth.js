import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import component from './component'
import provider from './provider'

@paint(component)
class Auth {
  @filter.prevent
  openEmailApp () {
    window.open(provider.url, '_blank')
    return this
  }
}

export default Auth
