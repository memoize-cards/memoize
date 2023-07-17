import didMount, { hook as _hook } from './didMount'
import magic from '@standard/magic'

const event = magic.didUnmount
const didUnmount = didMount.bind({ event })
const hook = _hook.bind({ event })

export default didUnmount
export {
  hook
}
