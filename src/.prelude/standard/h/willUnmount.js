import magic from '@standard/magic'
import willMount, { hook as _hook } from './willMount'

const event = magic.willUnmount
const willUnmount = willMount.bind({ event })
const hook = _hook.bind({ event })

export default willUnmount
export {
  hook
}
