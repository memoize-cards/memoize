import { urlFor } from '@standard/router'

const redirectTo = {
  dashboard () {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default redirectTo
