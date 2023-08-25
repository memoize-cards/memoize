import { urlFor } from '@standard/router'
import Button from '@elements/button'
import h from '@standard/h'

function component () {
  return (
    <Button onClick={() => location.assign(urlFor('createDeck'))} wide>Create new deck</Button>
  )
}

export default component
