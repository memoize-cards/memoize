import { urlFor } from '@standard/router'
import global from '@standard/global'

const redirectTo = {
  edit () {
    location.assign(urlFor('editDeck', { id: global.id }))
    return this
  }
}

export default redirectTo
