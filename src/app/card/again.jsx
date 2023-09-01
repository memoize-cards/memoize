import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component (props) {
  return (
    <Button {...props} danger wide>{translate.again}</Button>
  )
}

export default component
