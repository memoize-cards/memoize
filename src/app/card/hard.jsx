import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component (props) {
  return (
    <Button {...props} warning wide>{translate.hard}</Button>
  )
}

export default component