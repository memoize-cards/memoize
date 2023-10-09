import { params, urlFor } from '@standard/router'

const redirectTo = {
  edit () {
    location.assign(urlFor('editDeck', { id: params.id }))
    return this
  }
}

export default redirectTo
