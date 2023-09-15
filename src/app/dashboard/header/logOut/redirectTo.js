import { urlFor } from '@standard/router'

const redirectTo = {
  logOut () {
    location.assign(urlFor('logOut'))
    return this
  }
}

export default redirectTo
