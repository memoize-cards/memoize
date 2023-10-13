import { params, urlFor } from '@standard/router'

const redirectTo = {
  deck (id) {
    location.assign(urlFor('deck', { id }))
    return this
  },

  deleteDeck () {
    location.assign(urlFor('deleteDeck', { id: params.id }))
    return this
  }
}

export default redirectTo
