import { willMount, paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import cookie from './cookie'
import storage from './storage'

@paint(component)
class Auth {
  @willMount
  @storage.push
  @cookie.removeUser
  logOut () {
    location.assign(urlFor('logIn'))
    return this
  }
}

export default Auth
