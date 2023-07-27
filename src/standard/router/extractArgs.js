import args from './args'

/**
 * Function to extract query parameters from the URL and store them in the 'args' object.
 *
 * This function parses the current URL's query parameters and stores them in the 'args' object.
 * The 'args' object serves as a container to store the extracted query parameters for later use.
 * Each query parameter key and value will be set as a property on the 'args' object.
 * Note: This function assumes that the 'args' object is already defined and imported from './args'.
 *
 * @function
 * @memberof module:extractArgs
 * @returns {void}
 */
function extractArgs () {
  const url = new URL(location.href)
  const search = new URLSearchParams(url.search)
  Array.from(search.entries()).forEach(([key, value]) => Reflect.set(args, key, value))
}

export default extractArgs
