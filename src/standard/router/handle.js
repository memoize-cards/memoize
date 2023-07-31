import extractArgs from './extractArgs'
import extractParams from './extractParams'
import findMatchingRoute from './findMatchingRoute'

/**
 * Handle the current URL and execute the matched route's page function.
 *
 * This function is responsible for handling the current URL. It first finds a matching route
 * by calling the 'findMatchingRoute' function. Then, it extracts query parameters using the 'extractArgs'
 * function and route parameters using the 'extractParams' function based on the matched route's 'path'.
 * Finally, it calls the 'page' function of the matched route if available.
 *
 * @function
 * @memberof module:handle
 * @returns {void}
 */
function handle () {
  const { page, path } = findMatchingRoute()

  extractArgs()
  extractParams(path)

  page?.()
}

export default handle
