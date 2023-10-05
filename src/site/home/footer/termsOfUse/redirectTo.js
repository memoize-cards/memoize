import { urlFor } from '@standard/router'

const redirectTo = {
  termsOfUse () {
    location.assign(urlFor('termsOfUse'))
    return this
  }
}

export default redirectTo
