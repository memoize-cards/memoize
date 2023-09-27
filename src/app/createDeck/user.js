import cookie from '@standard/cookie'

class User {
  static get id () {
    return cookie.id
  }
}

export default User
