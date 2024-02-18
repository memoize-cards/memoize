import listeners from './listeners'

function findMatchingRoute () {
  return listeners.find(({ path }) => {
    const rule = path.replace(/:\w+/g, '([a-z0-9-_]+)')
    const pattern = new RegExp(`^${rule}$`, 'i')
    return pattern.test(location.pathname)
  })
}

export default findMatchingRoute
