import * as filter from '@standard/filter'
import { paint } from '@standard/h'
import component from './component'

@paint(component)
class Deck {
  @filter.prevent
  @filter.formData
  create (_data) {
    return this
  }
}

export default Deck
