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
  /**
   * Find a matching route and destructure its 'page' and 'path' properties (if available)
   */
  const { page, path } = findMatchingRoute()

  /**
   * Extract query parameters from the URL and store them in the 'args' object
   */
  extractArgs()

  /**
   * Extract route parameters from the URL path and store them in the 'params' object
   */
  extractParams(path)

  /**
   * Call the 'page' function of the matched route (if available)
   */
  page?.()
}

export default handle
