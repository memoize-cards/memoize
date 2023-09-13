import { urlFor } from '@standard/router'
import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component () {
  return (
    <Button onClick={() => location.assign(urlFor('createDeck'))} wide>{translate.createDeck}</Button>
  )
}

export default component
