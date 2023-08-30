import { params, urlFor } from '@standard/router'
import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component () {
  return (
    <Button onClick={() => location.assign(urlFor('createCard', { id: params.id }))} wide>{translate.createCard}</Button>
  )
}

export default component
