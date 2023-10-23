import { urlFor } from '@standard/router'

const redirectTo = {
  checkYourEmail (email) {
    location.assign(`${urlFor('checkYourEmail')}?email=${email}`)
    return this
  },

  logIn () {
    location.assign(urlFor('logIn'))
    return this
  }
}

export default redirectTo
