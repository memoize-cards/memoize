import Container from './container'
import h from '@standard/h'
import Learn from './learn'
import Relearn from './relearn'
import Review from './review'
import Total from './total'

function component () {
  return (
    <Container key='stats'>
      <Total />
      <Review />
      <Relearn />
      <Learn />
    </Container>
  )
}

export default component
