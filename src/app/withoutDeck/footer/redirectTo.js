import { urlFor } from '@standard/router'

const redirectTo = {
  createDeck () {
    location.assign(urlFor('createDeck'))
    return this
  }
}

export default redirectTo
