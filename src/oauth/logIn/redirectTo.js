import { urlFor } from '@standard/router'

const redirectTo = {
  dashboard () {
    location.assign(urlFor('dashboard'))
    return this
  },

  forgotPassword () {
    location.assign(urlFor('forgotPassword'))
    return this
  },

  signUp () {
    location.assign(urlFor('signUp'))
    return this
  }
}

export default redirectTo
