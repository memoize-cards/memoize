import h from '@standard/h'
import Learn from './learn'
import Relearn from './relearn'
import Review from './review'
import Stats from './stats'
import Total from './total'

function component () {
  return (
    <Stats>
      <Total />
      <Review />
      <Relearn />
      <Learn />
    </Stats>
  )
}

export default component
