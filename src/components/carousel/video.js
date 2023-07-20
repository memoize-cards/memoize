import { paint } from '@standard/h'
import Card from '@elements/card'

@paint(Card)
class Video {
  get discipline () {
    return 'Como refinar paragrafo de desenvolvimento!'
  }

  get teacher () {
    return 'Heittor Ferreira'
  }

  static create () {
    return new Video()
  }
}

export default Video
