import { urlFor } from '@standard/router'

const redirectTo = {
  deck (id) {
    location.assign(urlFor('deck', { id }))
    return this
  }
}

export default redirectTo
