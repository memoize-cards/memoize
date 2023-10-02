import { paint } from '@standard/h'
import component from './component'
import oauth from '@app/oauth'

@paint(component)
@oauth.required
class Card {

}

export default Card
