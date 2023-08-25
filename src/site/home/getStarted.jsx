import { urlFor } from '@standard/router'
import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component () {
  return (
    <Button onClick={() => location.assign(urlFor('logIn'))} primary wide>{translate.getStarted}</Button>
  )
}

export default component
