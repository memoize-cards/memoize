import params from './params'

/**
 * Function to extract parameters from the URL path and store them in the 'params' object.
 *
 * This function parses the current URL's path and extracts values for parameters indicated
 * by a leading colon (':') in the provided 'path'. It then stores these parameter values in
 * the 'params' object, using the parameter names as keys.
 *
 * @function
 * @memberof module:extractParams
 * @param {string} path - The path containing parameter placeholders (e.g., '/users/:id/posts/:postId').
 * @returns {void}
 */
function extractParams (path) {
  const url = new URL(location.href)
  const keys = path?.split('/')
  const values = url.pathname.split('/')
  keys?.forEach((key, i) => /^:/.test(key) && Reflect.set(params, key.slice(1), values[i]))
}

export default extractParams
