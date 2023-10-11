import { params } from '@standard/router'

class Deck {
  static get id () {
    return params.id
  }
}

export default Deck
