import { paint } from '@standard/h'
import component from './component'
import oauth from '@app/oauth'

@paint(component)
@oauth.required
class Dashboard {

}

export default Dashboard
