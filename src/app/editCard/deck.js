import { params } from '@standard/router'

class Deck {
  static get id () {
    return params.deck
  }
}

export default Deck
