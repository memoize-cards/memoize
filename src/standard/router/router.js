import handle from './handle'
import listeners from './listeners'

function router (path, page) {
  listeners.push({ path, page })
  return router
}

Object.assign(router, {
  handle
})

export default router
