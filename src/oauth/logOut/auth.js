import { willMount, paint } from '@standard/h'
import { urlFor } from '@standard/router'
import component from './component'
import cookie from './cookie'
import user from './user'

@paint(component)
class Auth {
  @willMount
  @user.deauthenticate
  @cookie.removeUser
  logOut () {
    location.assign(urlFor('logIn'))
    return this
  }
}

export default Auth
