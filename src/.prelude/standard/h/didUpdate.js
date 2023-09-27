import didMount, { hook as _hook } from './didMount'
import magic from '@standard/magic'

const event = magic.didUpdate
const didUpdate = didMount.bind({ event })
const hook = _hook.bind({ event })

export default didUpdate
export {
  hook
}
