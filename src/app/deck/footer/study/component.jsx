import Button from '@elements/button'
import h, { Fragment } from '@standard/h'
import redirectTo from './redirectTo'
import translate from './translate'

function component (study) {
  return (
    <>
      <Button onClick={() => redirectTo.card()} primary wide>{translate.study} ( {study.count} )</Button>
    </>
  )
}

export default component
