import { params, urlFor } from '@standard/router'

const redirectTo = {
  card () {
    location.assign(urlFor('card', { id: params.deck }))
    return this
  }
}

export default redirectTo
