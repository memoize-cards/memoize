import { urlFor } from '@standard/router'
import global from '@standard/global'

const redirectTo = {
  createCard () {
    location.assign(urlFor('createCard', { id: global.id }))
    return this
  }
}

export default redirectTo
