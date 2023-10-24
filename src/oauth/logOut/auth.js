import { paint } from '@standard/h'
import component from './component'
import redirectTo from './redirectTo'
import response from '@standard/response'
import storage from './storage'

@paint(component)
@storage.push
class Auth {
  [response.Ok] () {
    redirectTo.logIn()
    return this
  }
}

export default Auth
