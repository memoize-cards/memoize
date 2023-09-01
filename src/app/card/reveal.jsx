import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component (props) {
  return (
    <Button {...props} wide>{translate.reveal}</Button>
  )
}

export default component
