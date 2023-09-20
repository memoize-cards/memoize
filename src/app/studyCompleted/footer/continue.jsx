import Button from '@elements/button'
import h from '@standard/h'
import redirectTo from './redirectTo'
import translate from './translate'

function component () {
  return (
    <Button onClick={() => redirectTo.deck()} primary wide>{translate.continue}</Button>
  )
}

export default component
