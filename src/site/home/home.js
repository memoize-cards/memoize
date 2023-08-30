import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import cookie from './cookie'
import component from './component'
import result from '@standard/result'
import oauth from './oauth'

@paint(component)
@oauth
class Home {
  @cookie.setUser
  [result.Ok] (_user) {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default Home
