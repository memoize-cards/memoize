import { urlFor } from '@standard/router'

const redirectTo = {
  dashboard () {
    location.assign(urlFor('dashboard'))
    return this
  },

  login () {
    location.assign(urlFor('logIn'))
    return this
  }
}

export default redirectTo
