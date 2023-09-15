import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import cookie from './cookie'
import component from './component'
import result from '@standard/result'
import storage from './storage'

@paint(component)
@storage.pull
class Home {
  @cookie.setUser
  [result.Ok] (_user) {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default Home
