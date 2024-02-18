import { urlFor } from '@standard/router'

const redirectTo = {
  home () {
    location.assign(urlFor('home'))
    return this
  }
}

export default redirectTo
