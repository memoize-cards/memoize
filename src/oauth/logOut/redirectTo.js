import { urlFor } from '@standard/router'

const redirectTo = {
  logIn () {
    location.assign(urlFor('logIn'))
    return this
  }
}

export default redirectTo
