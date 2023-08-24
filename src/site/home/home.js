import { paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import user from './user'

@paint(component)
@user
class Home {
  [user.onAuthenticated] (_user) {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default Home
