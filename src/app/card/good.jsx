import Button from '@elements/button'
import h from '@standard/h'
import translate from './translate'

function component (props) {
  return (
    <Button {...props} success wide>{translate.good}</Button>
  )
}

export default component
