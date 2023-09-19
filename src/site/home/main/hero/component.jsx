import Benefits from './benefits'
import h from '@standard/h'
import HowItWorks from './howItWorks'
import stack from '@elements/stack'
import TryItOut from './tryItOut'
import Usage from './usage'

function component () {
  return (
    <stack.Ul column xs>
      <HowItWorks />
      <Usage />
      <Benefits />
      <TryItOut />
    </stack.Ul>
  )
}

export default component
