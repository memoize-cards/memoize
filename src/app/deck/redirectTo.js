import { params, urlFor } from '@standard/router'

const redirectTo = {
  dashboard () {
    location.assign(urlFor('dashboard'))
    return this
  },

  edit () {
    location.assign(urlFor('editDeck', { id: params.id }))
    return this
  }
}

export default redirectTo
