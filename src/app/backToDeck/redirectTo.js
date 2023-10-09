import { params, urlFor } from '@standard/router'

const redirectTo = {
  deck () {
    location.assign(urlFor('deck', params))
    return this
  }
}

export default redirectTo
