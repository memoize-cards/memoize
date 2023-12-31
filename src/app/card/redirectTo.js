import { urlFor } from '@standard/router'
import Deck from './deck'

const redirectTo = {
  studyCompleted () {
    location.assign(urlFor('studyCompleted', { id: Deck.id }))
    return this
  }
}

export default redirectTo
