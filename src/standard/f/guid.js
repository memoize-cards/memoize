/**
 * Generates a unique identifier (GUID) using a random number.
 *
 * @returns {string} The generated unique identifier.
 */
function guid () {
  return Math.random().toString(36).slice(2)
}

export default guid
