import { urlFor } from '@standard/router'

const redirectTo = {
  logIn () {
    location.assign(urlFor('logIn'))
    return this
  },

  passwordReset () {
    location.assign(urlFor('passwordReset'))
    return this
  }
}

export default redirectTo
