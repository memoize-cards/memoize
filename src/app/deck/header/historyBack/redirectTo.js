import { urlFor } from '@standard/router'

const redirectTo = {
  back () {
    location.assign(urlFor('dashboard'))
    return this
  }
}

export default redirectTo
