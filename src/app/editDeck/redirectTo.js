import { urlFor } from '@standard/router'

const redirectTo = {
  deck (id) {
    location.assign(urlFor('deck', { id }))
    return redirectTo
  }
}

export default redirectTo
