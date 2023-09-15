import { urlFor } from '@standard/router'
import global from '@standard/global'

const redirectTo = {
  card () {
    location.assign(urlFor('card', { id: global.id }))
    return this
  }
}

export default redirectTo
