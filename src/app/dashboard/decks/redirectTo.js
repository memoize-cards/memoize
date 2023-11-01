import { urlFor } from '@standard/router'

const redirectTo = {
  withoutDeck () {
    location.assign(urlFor('withoutDeck'))
    return this
  }
}

export default redirectTo
