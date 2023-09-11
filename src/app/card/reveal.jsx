import { position } from '@app/card/flip'
import Button from '@elements/button'
import h from '@standard/h'
import hook from '@standard/hook'
import translate from './translate'

function component () {
  return (
    <Button onClick={() => hook.reveal()} slot={position.FRONT} wide>{translate.reveal}</Button>
  )
}

export default component
