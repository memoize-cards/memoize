import listeners from './listeners'

/**
 * Find a matching route in the 'listeners' array based on the current URL path.
 *
 * This function parses the current URL's path and converts any parameter placeholders
 * (indicated by a leading colon) into regular expression patterns. It then searches for
 * a route in the 'listeners' array whose path matches the current URL path.
 *
 * @function
 * @memberof module:findMatchingRoute
 * @returns {Object} The matched route object, or an empty object if no match is found.
 */
function findMatchingRoute () {
  const url = new URL(location.href)
  const path = url.pathname.replace(/:\w+/g, '([a-z0-9-_]+)')
  const pattern = new RegExp(`^${path}$`, 'i')
  return listeners.find(({ path }) => pattern.test(path)) ?? {}
}

export default findMatchingRoute
