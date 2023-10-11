import Button from '@elements/button'
import Container from './container'
import h from '@standard/h'
import hook from '@standard/hook'
import translate from './translate'

function component () {
  return (
    <Container>
      <Button onClick={() => hook.reveal()} wide>{translate.reveal}</Button>
    </Container>
  )
}

export default component
