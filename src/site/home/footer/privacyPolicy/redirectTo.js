import { urlFor } from '@standard/router'

const redirectTo = {
  privacyPolicy () {
    location.assign(urlFor('privacyPolicy'))
    return this
  }
}

export default redirectTo
