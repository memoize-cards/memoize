import { params, urlFor } from '@standard/router'
import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component () {
  return (
    <Button onClick={() => location.assign(urlFor('card', { id: params.id }))} primary wide>{translate.study}</Button>
  )
}

export default component
