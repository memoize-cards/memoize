import listeners from './listeners'

/**
 * Generate a URL for a named route with the provided parameters.
 *
 * This function generates a URL based on the provided route name and parameters.
 * It looks for a route with a matching 'page' function name in the 'listeners' array,
 * extracts the 'path' of the matched route, and replaces route parameters with the provided values.
 *
 * @function
 * @memberof module:urlFor
 * @param {string} name - The name of the route to generate the URL for.
 * @param {Object} params - The parameters to replace in the route path.
 * @returns {string} The generated URL with replaced route parameters.
 */
function urlFor (name, params) {
  const keys = /:(?<key>\w+)/g
  const { path } = listeners.find(({ page }) => (page.name === name))
  return path.replace(keys, (_, key) => params[key])
}

export default urlFor
